"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7480],{8680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var l=n(5893),i=n(1151);const s={title:"MLflow 2.10.1",slug:"2.10.1",authors:["mlflow-maintainers"]},o=void 0,r={permalink:"/mlflow-website/releases/2.10.1",source:"@site/releases/2024-02-06-2.10.1-release.md",title:"MLflow 2.10.1",description:"MLflow 2.10.1 is a patch release, containing fixes for various bugs in the transformers and langchain flavors, the MLflow UI, and the S3 artifact store. More details can be found in the patch notes below.",date:"2024-02-06T00:00:00.000Z",formattedDate:"February 6, 2024",tags:[],readingTime:1.095,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.10.1",slug:"2.10.1",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.10.2",permalink:"/mlflow-website/releases/2.10.2"},nextItem:{title:"MLflow 2.10.0",permalink:"/mlflow-website/releases/2.10.0"}},a={authorsImageUrls:[void 0]},h=[];function c(e){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["MLflow 2.10.1 is a patch release, containing fixes for various bugs in the ",(0,l.jsx)(t.code,{children:"transformers"})," and ",(0,l.jsx)(t.code,{children:"langchain"})," flavors, the MLflow UI, and the S3 artifact store. More details can be found in the patch notes below."]}),"\n",(0,l.jsx)(t.p,{children:"Bug fixes:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["[UI] Fixed a bug that prevented datasets from showing up in the MLflow UI (",(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/10992",children:"#10992"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/daniellok-db",children:"@daniellok-db"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["[Artifact Store] Fixed directory bucket region name retrieval (",(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/10967",children:"#10967"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/kriscon-db",children:"@kriscon-db"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["Bug fixes for Transformers flavor","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["[Models] Fix an issue with transformer pipelines not inheriting the torch dtype specified on the model, causing pipeline inference to consume more resources than expected. (",(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/10979",children:"#10979"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["[Models] Fix non-idempotent prediction due to in-place update to model-config (",(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11014",children:"#11014"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["[Models] Fixed a bug affecting prompt templating with Text2TextGeneration pipelines. Previously, calling ",(0,l.jsx)(t.code,{children:"predict()"})," on a pyfunc-loaded Text2TextGeneration pipeline would fail for ",(0,l.jsx)(t.code,{children:"string"})," and ",(0,l.jsx)(t.code,{children:"List[string]"})," inputs. (",(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/10960",children:"#10960"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["Bug fixes for Langchain flavor","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Fixed errors that occur when logging inputs and outputs with different lengths (",(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/10952",children:"#10952"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/serena-ruan",children:"@serena-ruan"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Documentation updates:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["[Docs] Add indications of DL UI capabilities to the DL landing page (",(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/10991",children:"#10991"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["[Docs] Fix incorrect logo on LLMs landing page (",(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11017",children:"#11017"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Small bug fixes and documentation updates:"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/10930",children:"#10930"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11005",children:"#11005"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/serena-ruan",children:"@serena-ruan"}),"; ",(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/10927",children:"#10927"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/harupy",children:"@harupy"})]}),"\n",(0,l.jsxs)(t.p,{children:["For a comprehensive list of changes, see the ",(0,l.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.10.1",children:"release change log"}),", and check out the latest documentation on ",(0,l.jsx)(t.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var l=n(7294);const i={},s=l.createContext(i);function o(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);