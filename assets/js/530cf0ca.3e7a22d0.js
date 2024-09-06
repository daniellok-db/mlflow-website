"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5238],{8566:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>h,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var i=t(5893),r=t(1151);const n={title:"MLflow 1.21.0",slug:"1.21.0",authors:["mlflow-maintainers"]},s=void 0,o={permalink:"/mlflow-website/releases/1.21.0",source:"@site/releases/2021-10-25-1.21.0-release.md",title:"MLflow 1.21.0",description:"We are happy to announce the availability of MLflow 1.21.0!",date:"2021-10-25T00:00:00.000Z",formattedDate:"October 25, 2021",tags:[],readingTime:2.15,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.21.0",slug:"1.21.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 1.22.0",permalink:"/mlflow-website/releases/1.22.0"},nextItem:{title:"MLflow 1.20.2",permalink:"/mlflow-website/releases/1.20.2"}},h={authorsImageUrls:[void 0]},a=[];function c(e){const l={a:"a",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.p,{children:["We are happy to announce the availability of ",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.21.0",children:"MLflow 1.21.0"}),"!"]}),"\n",(0,i.jsx)(l.p,{children:"MLflow 1.21.0 includes several major features and improvements:"}),"\n",(0,i.jsx)(l.p,{children:"Features:"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["[UI] Add a diff-only toggle to the runs table for filtering out columns with constant values (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4862",children:"#4862"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/marijncv",children:"@marijncv"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[UI] Add a duration column to the runs table (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4840",children:"#4840"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/marijncv",children:"@marijncv"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[UI] Display the default column sorting order in the runs table (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4847",children:"#4847"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/marijncv",children:"@marijncv"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[UI] Add start_time and duration information to exported runs CSV (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4851",children:"#4851"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/marijncv",children:"@marijncv"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[UI] Add lifecycle stage information to the run page (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4848",children:"#4848"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/marijncv",children:"@marijncv"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[UI] Collapse run page sections by default for space efficiency, limit artifact previews to 50MB (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4917",children:"#4917"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Introduce autologging capabilities for PaddlePaddle model training (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4751",children:"#4751"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/jinminhao",children:"@jinminhao"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Add an optional tags field to the CreateExperiment API (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4788",children:"#4788"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),"; ",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4795",children:"#4795"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/apurva-koti",children:"@apurva-koti"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Add support for deleting artifacts from SFTP stores via the mlflow gc CLI (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4670",children:"#4670"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/afaul",children:"@afaul"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Support AzureDefaultCredential for authenticating with Azure artifact storage backends (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4002",children:"#4002"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/marijncv",children:"@marijncv"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Upgrade the fastai model flavor to support fastai V2 (>=2.4.1) (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4715",children:"#4715"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/jinzhang21",children:"@jinzhang21"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Introduce an mlflow.prophet model flavor for Prophet time series models (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4773",children:"#4773"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Introduce a CLI for publishing MLflow Models to the SageMaker Model Registry (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4669",children:"#4669"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/jinnig",children:"@jinnig"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Print a warning when inferred model dependencies are not available on PyPI (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4891",children:"#4891"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models, Projects] Add MLFLOW_CONDA_CREATE_ENV_CMD for customizing Conda environment creation (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4746",children:"#4746"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/giacomov",children:"@giacomov"}),")"]}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"Bug fixes and documentation updates:"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["[UI] Fix an issue where column selections made in the runs table were persisted across experiments (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4926",children:"#4926"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[UI] Fix an issue where the text null was displayed in the runs table column ordering dropdown (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4924",children:"#4924"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[UI] Fix a bug causing the metric plot view to display NaN values upon click (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4858",children:"#4858"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/arpitjasa-db",children:"@arpitjasa-db"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Fix a model load failure for paths containing spaces or special characters on UNIX systems (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4890",children:"#4890"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Correct a migration issue that impacted usage of MLflow Tracking with SQL Server (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4880",children:"#4880"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/marijncv",children:"@marijncv"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Spark datasource autologging tags now respect the maximum allowable size for MLflow Tracking (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4809",children:"#4809"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Model Registry] Add previously-missing certificate sources for Model Registry REST API requests (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4731",children:"#4731"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/ericgosno91",children:"@ericgosno91"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Model Registry] Throw an exception when users supply invalid Model Registry URIs for Databricks (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4877",children:"#4877"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/yunpark93",children:"@yunpark93"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Scoring] Fix a schema enforcement error that incorrectly cast date-like strings to datetime objects (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4902",children:"#4902"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/wentinghu",children:"@wentinghu"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Docs] Expand the documentation for the MLflow Skinny Client (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/4113",children:"#4113"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/eedeleon",children:"@eedeleon"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(l.p,{children:["For a comprehensive list of changes, see the ",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.21.0",children:"release change log"}),", and check out the latest documentation on ",(0,i.jsx)(l.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function m(e={}){const{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,l,t)=>{t.d(l,{Z:()=>o,a:()=>s});var i=t(7294);const r={},n=i.createContext(r);function s(e){const l=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function o(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(n.Provider,{value:l},e.children)}}}]);