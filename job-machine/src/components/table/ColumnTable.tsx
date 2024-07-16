import { Card, Col, Flex } from "antd";
import TextArea from "antd/es/input/TextArea";
import { BaseAvatar } from "@/components/common/BaseAvatar/BaseAvatar";
import { BaseButton } from "@/components/common/BaseButton/BaseButton";
import { BaseInput } from "@/components/common/BaseInput";
import { BaseModal } from "@/components/common/BaseModel";
import { useState } from "react";
 
export const ColumnTable = () => {
  const [isShowAcceptModal, setIsShowAcceptModal] = useState<boolean>(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState<boolean>(false);
  const [isShowViewModal, setIsShowViewModal] = useState<boolean>(false);
 
  return (
    <>
      <div>
        <BaseModal
          title={"Accept"}
          open={isShowAcceptModal}
          onOk={() => setIsShowAcceptModal(false)}
          onCancel={() => setIsShowAcceptModal(false)}
        >
          <p>Are you sure</p>
        </BaseModal>
        <BaseModal
          title={"Reject"}
          open={isShowRejectModal}
          onOk={() => setIsShowRejectModal(false)}
          onCancel={() => setIsShowRejectModal(false)}
        >
          <p>Are you sure</p>
        </BaseModal>
        <BaseModal
          title={"View Video/Image"}
          open={isShowViewModal}
          onOk={() => setIsShowViewModal(false)}
          onCancel={() => setIsShowViewModal(false)}
        >
          <Flex gap={30}>
            <Col span={12}>
              <Card style={{ height: "200px" }}>
                <Flex gap={20}>
                  <BaseAvatar />
                  <Flex vertical gap={10}>
                    <div>User name</div>
                    <div>Designer</div>
                  </Flex>
                </Flex>
              </Card>
            </Col>
            <Col span={10}>
              <Flex gap={20} vertical>
                <BaseInput placeholder="User name" />
                <BaseInput placeholder="Email" />
                <TextArea
                  rows={4}
                  placeholder="Description"
                  maxLength={6}
                />
              </Flex>
            </Col>
          </Flex>
        </BaseModal>
      </div>
      <Flex gap={5}>
        <BaseButton onClick={() => setIsShowViewModal(true)}>
          View
        </BaseButton>
        <BaseButton onClick={() => setIsShowAcceptModal(true)}>
          Accept
        </BaseButton>
        <BaseButton onClick={() => setIsShowRejectModal(true)}>
          Reject
        </BaseButton>
      </Flex>
    </>
  );
}