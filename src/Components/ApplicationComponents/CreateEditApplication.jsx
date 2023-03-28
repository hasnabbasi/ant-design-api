import React from 'react'
import { Input, Select } from "antd";
const { TextArea } = Input;
const CreateEditApplication = ({ title,handleEditSection }) => {
  return (
    <div>
      <div className="editApplication-header">
        <h3>{title}</h3>
        <p>
          Create an application providing name and quota parameters. Description
          a optional.
        </p>
        <p>Required field are marked with an asterisk (*)</p>
        <hr />
      </div>
      <div className="editContent-main">
        <div>
          <label htmlFor="applicationName" className="application-name-label">
            Application Name
          </label>
          <Input
            size="large"
            placeholder="My Application"
            name="applicationName"
            className="applicationName-input"
          />
        </div>
        <div>
          <label htmlFor="selecttokens" className="application-name-label">
            Shared Quota for Application Tokens
          </label>
          <Select
            name="selecttokens"
            defaultValue="10 mins"
            className="selecttoken-editapplication"
            options={[
              {
                value: "10 mins",
                label: "10 mins",
              },
              {
                value: "20 mins",
                label: "20 mins",
              },
              {
                value: "30 mins",
                label: "30 mins",
              },
              {
                value: "40 mins",
                label: "40 mins",
              },
            ]}
          />
        </div>
      </div>
      <p className="quota-hint">
        Assign API Requested quote per access token. Allocated quota will be
        shared among all the subscribed APIs of the apllication
      </p>
      <div className="aplication-description">
        <label
          htmlFor="applicationDescription"
          className="application-name-label"
        >
          Application Description
        </label>
        <TextArea
          name="applicationDescription"
          placeholder="Description"
          allowClear
          autoSize={{
            minRows: 8,
          }}
          className="description-textarea"
        />
      </div>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button className="save-btn" onClick={() => handleEditSection(false)}>
          Save
        </button>
        <button className="cancel-btn" onClick={() => handleEditSection(false)}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default CreateEditApplication
