import React from "react";
import { Modal } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
const DeleteModal = ({openDeleteModal,handleDeleteModal}) => {
  const handleOk = () => {
    handleDeleteModal(false);
  };
  const handleCancel = () => {
    handleDeleteModal(false);
  };
  return (
    <div>
      <Modal
        className="DeleteModal"
        open={openDeleteModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button key="Yes" onClick={handleOk} className="btn-yes">
            Yes
          </button>,
          <button key="NO" onClick={handleCancel} className="btn-no">
            NO
          </button>,
        ]}
      >
        <div className="delete-content">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <ReloadOutlined className="reload-icon" />
            <h1>Delete Application</h1>
          </div>
          <p>Are you sure you want to Delete ?</p>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
