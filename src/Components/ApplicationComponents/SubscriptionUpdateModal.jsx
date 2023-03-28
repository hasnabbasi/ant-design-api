import React from 'react'
import { Modal,Select } from "antd";
const SubscriptionUpdateModal = ({ updateSubscriptionModal, handleUpdateSubscriptionModal }) => {
    const handleOk = () => {
        handleUpdateSubscriptionModal(false);
    };
    const handleCancel = () => {
        handleUpdateSubscriptionModal(false);
    };
    return (
        <div>
            <Modal
                className="updateSubscription-Modal"
                open={updateSubscriptionModal}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <button key="Generate" onClick={handleOk} className="btn-yes">
                        Generate
                    </button>,
                    <button key="Cancel" onClick={handleCancel} className="btn-no">
                        Cancel
                    </button>,
                ]}
            >
                <div className="updateSubscription-content">
                    <p>Update Subscription</p>
                    <p>Current Bussiness Plan: Bronze</p>
                    <Select
                            defaultValue="Default"
                            id='select-menu-default'
                            className='subscriptionModal-select'
                            options={[
                                {
                                    value: 'Label1',
                                    label: 'Label1',
                                },
                                {
                                    value: 'Label2',
                                    label: 'Label2',
                                },
                                {
                                    value: 'Label3',
                                    label: 'Label3',
                                },
                                {
                                    value: 'Label4',
                                    label: 'Label4',
                                },
                            ]}
                        />
                        <p className='access-tokenhint'>Assign a business plan to the existing subscription</p>
                </div>
            </Modal>
        </div>
    )
}

export default SubscriptionUpdateModal
