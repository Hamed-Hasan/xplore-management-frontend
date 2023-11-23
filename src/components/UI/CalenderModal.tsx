import React, { useState } from "react";
import { Modal } from "antd";

const CalenderModal = ({ children, setIsModalOpen, isModalOpen }: any) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Adjust Schedule"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="flex justify-center"
      >
        {children}
      </Modal>
    </>
  );
};

export default CalenderModal;
