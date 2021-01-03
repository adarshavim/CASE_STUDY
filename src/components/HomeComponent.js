import React, { Component } from 'react';
import Header from './HeaderComponent';
import {changeTabNo,changeContent} from "../redux";
import {connect} from "react-redux";
import 'react-tabs/style/react-tabs.css';
import TabContent from "./TabComponent";
import axios from 'axios';
import{saveAs} from 'file-saver'
import { Form,Button,FormGroup,Input,Label, Modal, ModalHeader, ModalBody } from 'reactstrap';



const mapStateToProps=state=>{
    return{
        tabNo:state.tabs.tabNo,
        content:state.contents.img
    }
}

const mapDispatchToProps = dispatch =>({
    changeTabNo:(tabNo)=>{dispatch(changeTabNo(tabNo))},
    changeContent:(content)=>dispatch(changeContent(content))
})

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            senderemail:'',
            password:'',
            receiveremail:''

          };
          this.toggleModal = this.toggleModal.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
          this.handleChange=this.handleChange.bind(this);
          this.handleFormSubmit=this.handleFormSubmit.bind(this)
    }

    componentDidMount() {
        this.props.changeTabNo();
      }
    
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
        
      }

      handleChange=e=>{
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
      }
      
       async handleFormSubmit(e){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
           e.preventDefault()
          const senderemail=this.state.senderemail;
          const password=this.state.password;
          const receiveremail=this.state.receiveremail
      const form= await axios.post('/api/form',{senderemail,password,receiveremail})
        alert(form.data)
          
    }

      handleSubmit(index){
          this.props.changeTabNo(index);
          var temp='img1';
          if(index===1){
              temp='img1';
          }
          else if(index===2){
              temp='img2';
          }
          else
            temp='img3';
            this.props.changeContent(temp);
      }

      createAndDownloadPdf=()=>{
          axios.post('/create-pdf')
            .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
                .then((res) => {
                    const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                    saveAs(pdfBlob, 'newPdf.pdf');
                })
      }
     
      render(){
          return (
              <div>
                <Header tabNo={this.props.tabNo}/>
                <div className="row">
                        <button className="transparent-btn" onClick={()=>this.handleSubmit(1)}>Analysis 1</button>
                        <button className="transparent-btn" onClick={()=>this.handleSubmit(2)}>Analysis 2</button>
                        <button className="transparent-btn" onClick={()=>this.handleSubmit(3)}>Analysis 3</button>
                </div>
                <div className="row middlestrip">
                    <div className="col">
                    <div className="btn">
                        <button onClick={this.toggleModal}>Share</button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader>Share</ModalHeader>
                        <ModalBody>
                        <Form onSubmit={this.handleFormSubmit}>
                                <FormGroup>
                                    <Label for="senderemail">Sender's Email(Note:Access by less secure apps must be on for this email)</Label>
                                    <Input
                                        type="email"
                                        name="senderemail"
                                        onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="receiveremail">Reciever's Email</Label>
                                    <Input
                                        type="email"
                                        name="receiveremail"
                                        onChange={this.handleChange}/>
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </ModalBody>
                        </Modal>
                    </div>
                    <div className='btn'>
                    <button onClick={this.createAndDownloadPdf}>PDF</button>
                    </div>
                    </div>
                </div>
                <TabContent imgname={this.props.content}/>
              </div>
          )
      }
}
 export default connect(mapStateToProps,mapDispatchToProps)(Home)