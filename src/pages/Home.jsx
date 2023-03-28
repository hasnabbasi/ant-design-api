import React, { useState } from "react";
import { Layout, theme } from "antd";
import ListView from "../Components/APIComponents/ListView/ListView";
import MainNav from "../Components/MainNav/MainNav";
import MenuHeader from "../Components/MenuHeader/MenuHeader";
import SidebarMenu from "../Components/SidebarMenu/SidebarMenu";
import GridView from "../Components/APIComponents/GridView/GridView";
import Subscriptions from "../Components/APIComponents/Subscriptions";
import TryOut from "../Components/APIComponents/TryOut";
import Comments from "../Components/APIComponents/Comments";
import Documentation from "../Components/APIComponents/Documentation";
import SDKs from "../Components/APIComponents/SDKs";
import MyApplication from "../Components/ApplicationComponents/MyApplication";
import CreateEditApplication from "../Components/ApplicationComponents/CreateEditApplication";
import DeleteModal from "../Components/ApplicationComponents/DeleteModal";
import OverviewApplication from "../Components/ApplicationComponents/OverviewApplication";
import ProductionKeys from "../Components/ApplicationComponents/ProductionKeys";
import ProductionOAuth from "../Components/ApplicationComponents/ProductionOAuth";
import ProductionApikeys from "../Components/ApplicationComponents/ProductionApikeys";
import SandboxKeys from "../Components/ApplicationComponents/SandboxKeys";
import SandboxOAuth from "../Components/ApplicationComponents/SandboxOAuth";
import SandboxApikey from "../Components/ApplicationComponents/SandboxApikey";
import Subscription from "../Components/ApplicationComponents/Subscription";
import SubscriptionUpdateModal from "../Components/ApplicationComponents/SubscriptionUpdateModal";
const { Content } = Layout;
const Home = () => {
  const [changeMenu, setChangeMenu] = useState("api");
  const [view, setView] = useState("ListView");
  const [selectedComponent, setSelectedComponent] = useState(
    changeMenu === "api" ? "overview" : ""
  );
  const [openSubscribeModal, setOpenSubscribeModal] = useState(true);
  const [editApplication, setEditApplication] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [updateSubscriptionModal, setUpdateSubscriptionModal] = useState(false);
  const handleDeleteModal = (value) => {
    setOpenDeleteModal(value);
  };
  const handleUpdateSubscriptionModal = (value) => {
    setUpdateSubscriptionModal(value);
  };
  const handleEditSection = (value) => {
    setEditApplication(value);
  };

  const handleView = (value) => {
    setView(value);
  };

  const ChangeComponent = (item) => {
    setSelectedComponent(item);
  };

  const handleChangeMenu = (value) => {
    setChangeMenu(value);
  };
  const handleSubscribeApi=(value)=>{
    setOpenSubscribeModal(value);
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* SideBar Menu */}
      <SidebarMenu
        ChangeComponent={ChangeComponent}
        selectedComponent={selectedComponent}
        changeMenu={changeMenu}
        handleChangeMenu={handleChangeMenu}
      />
      <Layout>
        {/* Main Nav Component*/}
        <MainNav />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: "white",
          }}
        >
          {/* API Sections */}
          {selectedComponent === "overview" && changeMenu === "api" && (
            <div>
              {/* Second Header*/}
              <MenuHeader handleView={handleView} view={view} />
              {/* Grid and List Component */}
              {view === "ListView" ? (
                <ListView />
              ) : view === "GridView" ? (
                <GridView />
              ) : null}
            </div>
          )}
          {selectedComponent === "subscription" && changeMenu === "api" && (
            <div>
              {/* Subscrition*/}
              <Subscriptions />
            </div>
          )}
          {selectedComponent === "tryout" && changeMenu === "api" && (
            <div>
              {/* Try Out*/}
              <TryOut />
            </div>
          )}
          {selectedComponent === "comments" && changeMenu === "api" && (
            <div>
              {/* Comments*/}
              <Comments />
            </div>
          )}
          {selectedComponent === "documentation" && changeMenu === "api" && (
            <div>
              {/* Documentation*/}
              <Documentation />
            </div>
          )}
          {selectedComponent === "sdks" && changeMenu === "api" && (
            <div>
              {/* SDKs*/}
              <SDKs />
            </div>
          )}

          {/* Application Sections */}
          {changeMenu === "application" && (
            <div>
              {/* DeleteModal */}
              <DeleteModal
                handleDeleteModal={handleDeleteModal}
                openDeleteModal={openDeleteModal}
              />
              {/* SubscriptionApi Modal */}
              <SubscriptionUpdateModal handleUpdateSubscriptionModal={handleUpdateSubscriptionModal} updateSubscriptionModal={updateSubscriptionModal}/>
              {/* My Application */}
              {!editApplication && selectedComponent === "" && (
                <MyApplication
                  handleEditSection={handleEditSection}
                  handleDeleteModal={handleDeleteModal}
                />
              )}
              {editApplication && selectedComponent === "" && (
                <CreateEditApplication
                  handleEditSection={handleEditSection}
                  title="Edit Application"
                />
                // <CreateEditApplication handleEditSection={handleEditSection} title="Create an Application"/>
              )}
              {selectedComponent === "overview" &&
                changeMenu === "application" && (
                  <div>
                    {/* Overview Application*/}
                    <OverviewApplication/>
                  </div>
                )}
              {selectedComponent === "productionkeys" &&
                changeMenu === "application" && (
                  <div>
                    {/* Overview Application*/}
                    <ProductionKeys/>
                  </div>
                )}
              {selectedComponent === "productionOauth2tokens" &&
                changeMenu === "application" && (
                  <div>
                    {/* Overview Application*/}
                    <ProductionOAuth/>
                  </div>
                )}
              {selectedComponent === "productionapikeys" &&
                changeMenu === "application" && (
                  <div>
                    {/* Overview Application*/}
                    <ProductionApikeys/>
                  </div>
                )}
              {selectedComponent === "sandboxkeys" &&
                changeMenu === "application" && (
                  <div>
                    {/* Overview Application*/}
                    <SandboxKeys/>
                  </div>
                )}
              {selectedComponent === "sandboxOauth2tokens" &&
                changeMenu === "application" && (
                  <div>
                    {/* Overview Application*/}
                    <SandboxOAuth/>
                  </div>
                )}
              {selectedComponent === "sandboxapikeys" &&
                changeMenu === "application" && (
                  <div>
                    {/* Overview Application*/}
                    <SandboxApikey/>
                  </div>
                )}
              {selectedComponent === "subscription" &&
                changeMenu === "application" && (
                  <div>
                    {/* Overview Application*/}
                    <Subscription handleSubscribeApi={handleSubscribeApi} openSubscribeModal={openSubscribeModal} handleDeleteModal={handleDeleteModal} handleUpdateSubscriptionModal={handleUpdateSubscriptionModal}/>
                  </div>
                )}
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
