"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9522],{1501:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var n=l(5893),s=l(1151);const r={title:"MLflow 0.3.0",slug:"0.3.0",authors:["mlflow-maintainers"]},a=void 0,i={permalink:"/mlflow-website/releases/0.3.0",source:"@site/releases/2018-07-18-0.3.0-release.md",title:"MLflow 0.3.0",description:"We are happy to announce the availability of MLflow 0.3.0!",date:"2018-07-18T00:00:00.000Z",formattedDate:"July 18, 2018",tags:[],readingTime:1.085,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 0.3.0",slug:"0.3.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 0.4.0",permalink:"/mlflow-website/releases/0.4.0"},nextItem:{title:"MLflow 0.2.1",permalink:"/mlflow-website/releases/0.2.1"}},o={authorsImageUrls:[void 0]},h=[];function c(e){const t={a:"a",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We are happy to announce the availability of ",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v0.3.0",children:"MLflow 0.3.0"}),"!"]}),"\n",(0,n.jsxs)(t.p,{children:["MLflow Release 0.3.0 is ready, released 2018-07-18. The release is available on ",(0,n.jsx)(t.a,{href:"https://pypi.org/project/mlflow/",children:"PyPI"})," and docs are ",(0,n.jsx)(t.a,{href:"https://mlflow.org/docs/latest/index.html",children:"updated"}),". Here are the release notes:"]}),"\n",(0,n.jsx)(t.p,{children:"Breaking changes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["[MLflow Server] Renamed --artifact-root parameter to --default-artifact-root in mlflow server to better reflect its purpose (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/165",children:"#165"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/aarondav",children:"@aarondav"}),")"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Features:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Spark MLlib integration: we now support logging SparkML Models directly in the log_model API, model format, and serving APIs (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/72",children:"#72"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/tomasatdatabricks",children:"@tomasatdatabricks"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Google Cloud Storage is now supported as an artifact storage root (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/152",children:"#152"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/bnekolny",children:"@bnekolny"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Support asychronous/parallel execution of MLflow runs (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/82",children:"#82"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/smurching",children:"@smurching"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["[SageMaker] Support for deleting, updating applications deployed via SageMaker (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/145",children:"#145"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["[SageMaker] Pushing the MLflow SageMaker container now includes the MLflow version that it was published with (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/124",children:"#124"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/sueann",children:"@sueann"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["[SageMaker] Simplify parameters to SageMaker deploy by providing sane defaults (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/126",children:"#126"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/sueann",children:"@sueann"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["[UI] One-element metrics are now displayed as a bar char (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/118",children:"#118"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/cryptexis",children:"@cryptexis"}),")"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Bug fixes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Require gitpython>=2.1.0 (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/98",children:"#98"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/aarondav",children:"@aarondav"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Fixed TensorFlow model loading so that columns match the output names of the exported model (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/94",children:"#94"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/smurching",children:"@smurching"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Fix SparkUDF when number of columns >= 10 (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/97",children:"#97"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/aarondav",children:"@aarondav"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Miscellaneous bug and documentation fixes from ",(0,n.jsx)(t.a,{href:"https://github.com/emres",children:"@emres"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/dmatrix",children:"@dmatrix"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/stbof",children:"@stbof"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/gsganden",children:"@gsganden"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/dennyglee",children:"@dennyglee"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/anabranch",children:"@anabranch"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/mikehuston",children:"@mikehuston"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/andrewmchen",children:"@andrewmchen"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/juntai-zheng",children:"@juntai-zheng"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Visit the ",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/blob/master/CHANGELOG.rst#030-2018-07-18",children:"change log"})," to read about the new features."]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,l)=>{l.d(t,{Z:()=>i,a:()=>a});var n=l(7294);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);