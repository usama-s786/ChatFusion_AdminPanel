(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{9566:function(e,d,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manageUsers",function(){return t(8193)}])},8193:function(e,d,t){"use strict";t.r(d),t.d(d,{default:function(){return l}});var r=t(5893),s=t(7294),o=t(1163);function l(){let[e,d]=(0,s.useState)([]),[t,l]=(0,s.useState)(null),[i,n]=(0,s.useState)(""),[a,c]=(0,s.useState)(""),p=(0,o.useRouter)();(0,s.useEffect)(()=>{u()},[]);let u=async()=>{try{let e=await fetch("http://localhost:3000/allUsers"),t=await e.json();d(t.users)}catch(e){console.error("Error fetching users:",e)}},x=async e=>{if(window.confirm("Are you sure you want to delete user ".concat(e,"?")))try{let d=await fetch("http://localhost:3000/deleteUser/".concat(e),{method:"DELETE"}),t=await d.json();if(t.success)alert("User ".concat(e," deleted successfully.")),u();else throw Error(t.message)}catch(e){console.error("Error deleting user:",e),alert("Error deleting user.")}},h=async e=>{try{if(!i.trim()){alert("Email cannot be empty.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){alert("Please enter a valid email address.");return}let d=await fetch("http://localhost:3000/updateUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:e,email:i,displayName:a})}),t=await d.json();if(t.success)alert("User ".concat(e," updated successfully.")),l(null),u();else throw Error(t.message)}catch(e){console.error("Error updating user:",e),alert("Error updating user.")}},g=async(e,d)=>{let t=d?"disable":"enable";if(window.confirm("Are you sure you want to ".concat(t," user ").concat(e,"?")))try{let t=await fetch("http://localhost:3000/toggleUserStatus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:e,disabled:d})}),r=await t.json();if(r.success)alert("User ".concat(e," ").concat(d?"disabled":"enabled"," successfully.")),u();else throw Error(r.message)}catch(e){console.error("Error toggling user status to ".concat(t,":"),e),alert("Error toggling user status to ".concat(t,"."))}};return(0,r.jsxs)("div",{style:{fontFamily:"Arial, sans-serif"},children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsx)("h1",{style:{textAlign:"left"},children:"Manage Users"}),(0,r.jsx)("button",{onClick:()=>p.push("/dashboard"),style:{padding:"8px 16px",backgroundColor:"#808080",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"16px"},children:"Back to Dashboard"})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse"},children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{style:{backgroundColor:"#f0f0f0"},children:[(0,r.jsx)("th",{style:{padding:"8px",border:"1px solid #ddd"},children:"Email"}),(0,r.jsx)("th",{style:{padding:"8px",border:"1px solid #ddd"},children:"UID"}),(0,r.jsx)("th",{style:{padding:"8px",border:"1px solid #ddd"},children:"Display Name"}),(0,r.jsx)("th",{style:{padding:"8px",border:"1px solid #ddd"},children:"Last Sign-In Time"}),(0,r.jsx)("th",{style:{padding:"8px",border:"1px solid #ddd"},children:"Creation Time"}),(0,r.jsx)("th",{style:{padding:"8px",border:"1px solid #ddd"},children:"Status"}),(0,r.jsx)("th",{style:{padding:"8px",border:"1px solid #ddd"},children:"Actions"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{style:{padding:"8px",border:"1px solid #ddd"},children:t===e.uid?(0,r.jsx)("input",{type:"email",value:i,onChange:e=>n(e.target.value),style:{fontSize:"16px"}}):e.email}),(0,r.jsx)("td",{style:{padding:"8px",border:"1px solid #ddd"},children:e.uid}),(0,r.jsx)("td",{style:{padding:"8px",border:"1px solid #ddd"},children:t===e.uid?(0,r.jsx)("input",{type:"text",value:a,onChange:e=>c(e.target.value),style:{fontSize:"16px"}}):e.displayName||"N/A"}),(0,r.jsx)("td",{style:{padding:"8px",border:"1px solid #ddd"},children:e.lastSignInTime}),(0,r.jsx)("td",{style:{padding:"8px",border:"1px solid #ddd"},children:e.creationTime}),(0,r.jsx)("td",{style:{padding:"8px",border:"1px solid #ddd"},children:e.disabled?"Disabled":"Enabled"}),(0,r.jsx)("td",{style:{padding:"8px",border:"1px solid #ddd"},children:t===e.uid?(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{onClick:()=>h(e.uid),style:{padding:"6px 12px",marginRight:"5px",fontSize:"16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px"},children:"Save"}),(0,r.jsx)("button",{onClick:()=>l(null),style:{padding:"6px 12px",fontSize:"16px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"4px"},children:"Cancel"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:()=>{l(e.uid),n(e.email),c(e.displayName)},style:{padding:"6px 12px",marginRight:"5px",fontSize:"16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px"},children:"Edit"}),(0,r.jsx)("button",{onClick:()=>x(e.uid),style:{padding:"6px 12px",marginRight:"5px",fontSize:"16px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"4px"},children:"Delete"}),(0,r.jsxs)("select",{defaultValue:e.disabled?"Disabled":"Enabled",onChange:d=>g(e.uid,"Disabled"===d.target.value),style:{padding:"6px",marginRight:"5px",fontSize:"16px",backgroundColor:"#0070f3",color:"white",border:"1px solid #0070f3",borderRadius:"4px"},children:[(0,r.jsx)("option",{value:"Enabled",style:{backgroundColor:"#4CAF50",color:"white"},children:"Enable"}),(0,r.jsx)("option",{value:"Disabled",style:{backgroundColor:"#f44336",color:"white"},children:"Disable"})]})]})})]},e.uid))})]})]})}},1163:function(e,d,t){e.exports=t(4546)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=9566)}),_N_E=e.O()}]);