import { useState, useEffect } from 'react';
import { Col, Row, Spin } from 'antd';
import { ContainerPost, CardCustom } from './PostManagement.styled';
import { BaseArticle } from '@/components/common/BaseArticle';
import ActionBtn from '@/components/post/ActionBtn';
import VideoPlayer from '@/components/post/VideoPlayer';
import { BaseTag } from '@/components/common/BaseTag/index';
import { CloseCircleOutlined } from '@ant-design/icons';
import { EmptyPage } from '../EmptyPage';
import { PostApi } from '@/api/post/PostApi';
import { BasePagination } from '@/components/common/BasePagination/BasePagination';
import { IQuery, InforPost, ICheckbox } from '@/interfaces/interfaces';
import { SightengineApi } from '@/api/sightengine/sightengineApi';
import { BaseCheckbox } from '@/components/common/BaseCheckbox/BaseCheckbox';
import layoutIcon from '@/assets/images/layout.png';
import { format } from 'date-fns';
import FilterSection from '@/components/post/FilterSection';
import BulkActions from '@/components/post/BulkActions';

const PostContent: React.FC<ICheckbox> = () => {
  const [news, setNews] = useState<InforPost[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [col, setCol] = useState(6);

  const [query, setQuery] = useState<IQuery>({
    page: 1,
    limit: 4,
    title: '',
    start_date: '',
    end_date: ''
  });
  const spanMapping = {
    1: 24,
    2: 12,
    4: 6
  };
  const options = [1, 2, 4];

  useEffect(() => {
    fetchData();
  }, [query]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    PostApi.apiAllPost(query)
      .then(response => {
        setCurrentPage(response.data.totalCount);
        const items = response.data.items;

        return Promise.all(
          items.map(item => {
            item.centersor = {
              action: 'accept',
              rejectReason: {
                text: '',
                reject_prob: 0,
                reject_reason: { text: '' }
              }
            };

            if (item.type_file === 'Img') {
              return SightengineApi.getImg(item.url_file)
                .then(res => {
                  item.centersor.action = res.data.summary.action;
                  if (item.centersor.action === 'reject') {
                    item.centersor.rejectReason.text =
                      res.data.summary.reject_reason[0].text;
                  }
                  return item;
                })
                .catch(error => {
                  console.error('Error processing image:', error);
                  return item;
                });
            }

            return Promise.resolve(item);
          })
        );
      })
      .then(updatedNews => {
        setNews(updatedNews);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = async (id: number) => {
    if (id) {
      PostApi.apiDelete(id)
        .then(() => {
          fetchData();
        })
        .catch(error => {
          console.log('Error fetching posts:', error);
        });
    } else {
      Promise.all(
        selectedPosts.map(postId => PostApi.apiDelete(parseInt(postId)))
      )
        .then(() => {
          setSelectedPosts([]);
          fetchData();
        })
        .catch(error => {
          // console.error('Failed to delete selected posts:', error);
        });
    }
  };

  const handleAcceptPost = (id: number) => {
    if (id) {
      PostApi.apiActive(id)
        .then(() => {
          fetchData();
        })
        .catch(error => {
          console.error('Failed to accept post:', error);
        });
    } else {
      Promise.all(
        selectedPosts.map(postId => PostApi.apiActive(parseInt(postId)))
      )
        .then(() => {
          setSelectedPosts([]);
          fetchData();
        })
        .catch(error => {
          console.log('Failed to active seleted posts:', error);
        });
    }
  };

  const handleFilter = value => {
    const { titleContent, datetime } = value;
    const newQuery = { ...query };

    if (datetime && datetime.length > 0 && datetime[0]) {
      const startDate = new Date(datetime[0].$d);
      const endDate = datetime[1] ? new Date(datetime[1].$d) : startDate;

      const formattedStartDate = format(startDate, 'yyyy-MM-dd HH:mm:ss');
      const formattedEndDate = format(endDate, 'yyyy-MM-dd HH:mm:ss');

      newQuery.start_date = formattedStartDate;
      newQuery.end_date = formattedEndDate;
    } else {
      newQuery.start_date = '';
      newQuery.end_date = '';
    }

    if (titleContent) {
      newQuery.title = titleContent;
    } else {
      newQuery.title = '';
    }

    newQuery.page = 1;
    newQuery.limit = 4;

    setQuery(newQuery);
  };

  const handlePagination = (page: number) => {
    const newQuery = { ...query };
    newQuery.page = page;
    setQuery(newQuery);
  };

  const handleOptionChange = selectedOption => {
    setCol(spanMapping[selectedOption] || 6);
  };

  const getColSpan = () => col;

  const handleDeleteAllSelected = async () => {
    for (const postId of selectedPosts) {
      await handleDelete(Number(postId));
    }
    setSelectedPosts([]);
    fetchData();
  };

  const handleActiveAllSelected = async () => {
    for (const postId of selectedPosts) {
      await handleAcceptPost(Number(postId));
    }
    setSelectedPosts([]);
    fetchData();
  };

  const handleCheckboxChange = (postId, isChecked) => {
    if (isChecked) {
      setSelectedPosts(prev => [...prev, postId]);
    } else {
      setSelectedPosts(prev => prev.filter(id => id !== postId));
    }
  };

  const handleCheckAll = () => {
    if (news && selectedPosts.length < news?.length) {
      setSelectedPosts(news?.map(post => String(post.id)));
    } else {
      setSelectedPosts([]);
    }
    setIsChecked(!isChecked);
  };

  return (
    <>
      <ContainerPost>
        <FilterSection
          col={col}
          handleFilter={handleFilter}
          handleOptionChange={handleOptionChange}
          options={options}
          layoutIcon={layoutIcon}
        />
        <BulkActions
          col={col}
          selectedPosts={selectedPosts}
          handleCheckAll={handleCheckAll}
          handleDeleteAllSelected={handleDeleteAllSelected}
          handleActiveAllSelected={handleActiveAllSelected}
          isAllSelected={selectedPosts.length > 0}
        />
        {loading ? (
          <Spin
            spinning={true}
            tip="Loading..."
            size="large"
            className="spin-container"
          />
        ) : (
          <Row
            gutter={[16, 16]}
            className={col === 24 ? 'middle-container-row' : 'container-row'}
          >
            {news && news.length ? (
              <Col span={24}>
                <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
                  {news?.map((post, index) => (
                    <Col span={getColSpan()} key={post.id}>
                      <CardCustom>
                        {col === 6 ? (
                          <div className="md-card-item">
                            <VideoPlayer
                              index={index}
                              post={post}
                              col={getColSpan()}
                            />
                            {post.centersor?.action === 'reject' &&
                            post.centersor?.rejectReason ? (
                              <BaseTag
                                icon={<CloseCircleOutlined />}
                                color="error"
                                key={`reject-reason-${index}`}
                              >
                                {post.centersor.rejectReason.text}
                              </BaseTag>
                            ) : null}
                            <BaseArticle
                              created_at={post.created_at || ''}
                              title={post.title || ''}
                              description={post.caption || ''}
                              date={post.date || ''}
                              author={post.author}
                              avatar={post.url_file}
                              postId={String(post.id)}
                              col={getColSpan()}
                            />
                            <ActionBtn
                              handleDelete={() => handleDelete(post.id)}
                              handleAcceptPost={() => handleAcceptPost(post.id)}
                              itemKey={``}
                              col={getColSpan()}
                            />
                          </div>
                        ) : (
                          <div
                            className={
                              col === 24
                                ? 'xl-card-item xs-card-item'
                                : 'xs-card-item'
                            }
                          >
                            <BaseCheckbox
                              className="btn-checkbox"
                              checked={selectedPosts.includes(String(post.id))}
                              onChange={e =>
                                handleCheckboxChange(
                                  String(post.id),
                                  e.target.checked
                                )
                              }
                            />
                            <BaseArticle
                              created_at={post.created_at || ''}
                              title={post.title || ''}
                              description={post.caption || ''}
                              date={post.date || ''}
                              author={post.author}
                              avatar={post.url_file}
                              postId={String(post.id)}
                              col={getColSpan()}
                            />
                            <VideoPlayer
                              index={index}
                              post={post}
                              col={getColSpan()}
                            />
                            <ActionBtn
                              handleDelete={() => handleDelete(post.id)}
                              handleAcceptPost={() => handleAcceptPost(post.id)}
                              itemKey={``}
                              col={getColSpan()}
                            />
                          </div>
                        )}
                      </CardCustom>
                    </Col>
                  ))}
                </Row>
                <BasePagination
                  defaultCurrent={1}
                  total={currentPage}
                  pageSize={query.limit}
                  current={query.page}
                  onChange={page => {
                    handlePagination(page);
                  }}
                  className="pagination"
                />
              </Col>
            ) : (
              <EmptyPage />
            )}
          </Row>
        )}
      </ContainerPost>
    </>
  );
};

export default PostContent;
