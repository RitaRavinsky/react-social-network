"use strict";(self.webpackChunklearning_react=self.webpackChunklearning_react||[]).push([[3],{9003:function(e,s,n){n.r(s),n.d(s,{default:function(){return C}});var a=n(364),t=n(7781),i=n(1413),r=n(5671),c=n(3144),o=n(136),u=n(3668),l=n(2791),d=n(6871),g=n(184),m=function(e){return{isAuth:e.auth.isAuth}},h=n(2807),p=n(9743),f=n(2677),x=n(5705),j=n(3855),v=n(3360),_=n(6006),N="Dialogs_dialogs__u-jY5",w="Dialogs_dialogMessages__24PX8",M="Dialogs_newMessageForm__7B-9k",Z="Dialogs_dialogsWrapper__Oefd5",b=_.Ry().shape({newPost:_.Z_().min(2,"Too Short!").max(200,"Too Long!").trim()}),A=function(e){var s=e.onAddNewMessage;return(0,g.jsx)("div",{className:M+" mt-auto w-100 px-4 py-4",children:(0,g.jsx)(x.J9,{initialValues:{newMessage:""},validationSchema:b,onSubmit:function(e,n){var a=n.setSubmitting,t=n.resetForm;setTimeout((function(){s(e.newMessage),a(!1),t()}),400)},children:function(e){var s=e.values,n=e.handleSubmit,a=e.isSubmitting;return(0,g.jsxs)(x.l0,{onSubmit:n,children:[(0,g.jsx)(j.Z.Group,{children:(0,g.jsx)(x.gN,{component:"textarea",name:"newMessage",value:s.newMessage,className:"w-100",rows:3,placeholder:"Type your message..."})}),(0,g.jsx)(x.Bc,{name:"newMessage",component:"div",className:"errorMessage"}),(0,g.jsx)(v.Z,{type:"submit",disabled:a,variant:"light",children:"Send"})]})}})})},S=n(3504),k={active:"DialogItem_active__O32ft"},y=function(e){var s=e.contactId,n=e.contactName;return(0,g.jsx)("div",{className:k.contactWrap,children:(0,g.jsx)(S.OL,{className:function(e){return e.isActive?k.active:""},to:"/dialog/".concat(s),children:n},s)})},I="Message_message__kfdLb",D=function(e){var s=e.message;return(0,g.jsx)("div",{className:I,children:s})},P=function(e){var s=e.dialogsPage,n=e.onAddNewMessage,a=(e.onMessageInput,s.dialogs.map((function(e){return(0,g.jsx)(y,{contactId:e.contactId,contactName:e.contactName},e.contactId)}))),t=s.messages.map((function(e){return(0,g.jsx)(D,{message:e.message},e.id)}));return(0,g.jsx)("section",{className:Z,children:(0,g.jsxs)(p.Z,{children:[(0,g.jsx)(f.Z,{md:3,className:N+" pt-4 ",children:a}),(0,g.jsx)(f.Z,{className:w,children:(0,g.jsxs)("div",{className:"pt-4 d-flex align-items-start flex-column",children:[(0,g.jsx)("div",{className:"messagesWrap px-4 w-100",children:t}),(0,g.jsx)(A,{onAddNewMessage:n})]})})]})})},C=(0,t.qC)((0,a.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onAddNewMessage:function(s){e((0,h.$)(s))}}})),(function(e){var s=function(s){(0,o.Z)(a,s);var n=(0,u.Z)(a);function a(){return(0,r.Z)(this,a),n.apply(this,arguments)}return(0,c.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,g.jsx)(e,(0,i.Z)({},this.props)):(0,g.jsx)(d.Fg,{to:"/login"})}}]),a}(l.Component);return(0,a.$j)(m)(s)}))(P)}}]);
//# sourceMappingURL=3.22ebc5f3.chunk.js.map