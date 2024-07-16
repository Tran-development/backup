import React, { useState } from 'react';
import { BaseAvatar } from '@/components/common/BaseAvatar/BaseAvatar';
import {
  Header,
  Author,
  AuthorWrapper,
  DateTime,
  InfoHeader,
  InfoWrapper,
  Title,
  Wrapper,
  Description
} from './BaseArticle.styled';
import { Col, Row } from 'antd';
export interface BaseArticleProps {
  author?: React.ReactNode;
  imgUrl?: string;
  title: string;
  date?: string;
  description: string;
  avatar?: string;
  className?: string;
  postId?: string;
  created_at: Date | string;
  col: number;
}

export const BaseArticle: React.FC<BaseArticleProps> = ({
  title,
  date,
  description,
  author,
  avatar,
  created_at,
  col
}) => {
  const [isShowFullText, setIsShowFullText] = useState(false);

  const getTruncatedDescription = (
    description: string,
    isShowFullText: boolean
  ) => {
    if (col === 6 && !isShowFullText && description?.length > 50) {
      return `${description.substring(0, 50)}  ... `;
    }
    return description;
  };

  return (
    <Wrapper>
      <Header className="header-card">
        <Row>
          {col !== 6 ? (
            <Col span={6}>
              {!!avatar && <BaseAvatar src={avatar} alt="author" size={60} />}
            </Col>
          ) : (
            <Col span={1}></Col>
          )}

          <Col span={10}>
            <AuthorWrapper>{author && <Author>{author}</Author>}</AuthorWrapper>
            <DateTime>{created_at.toString().split('T')[0]}</DateTime>
          </Col>
        </Row>
      </Header>
      <InfoWrapper>
        <InfoHeader>
          <Title className="card-title">
            {getTruncatedDescription(title, isShowFullText)}
          </Title>
        </InfoHeader>
        <Description className={col === 6 ? 'md-des' : 'xs-des'}>
          {getTruncatedDescription(description, isShowFullText)}
        </Description>
      </InfoWrapper>
    </Wrapper>
  );
};
