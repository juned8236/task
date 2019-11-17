import "./App1.css";
import React from "react";
import Input from '../Input/index'
import  Row1 from '../Row1/index'
import Box from '../Box/index'
import { Row, Col } from 'antd';

function template() {
  const {  no,n1, col, a2, a3, a, b ,gr,gc} = this.state;


  return (
    <div className="app-1">
      <div className="gutter-example">
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
          <Col className="gutter-row" span={12}>

            <Input className="gutter-box" placeholder="Enter no-of-rows eg. 2" type="text" id="no" val={no} fnPrepareData={this.fnPrepareData} />
          </Col>
          <Col className="gutter-row" span={12}>

            <Input className="gutter-box" placeholder="Enter columns-string eg. 3,2" type="text" id="col" val={col} fnPrepareData={this.fnPrepareData} />
          </Col>
        </Row>
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>

          <Col className="gutter-row" span={12}>
            <Input className="gutter-box" placeholder="gutter-row eg. 8" type="text" id="gr" val={gr} fnPrepareData={this.fnPrepareData} />
          </Col>
          <Col className="gutter-row" span={12}>

            <Input  placeholder="gutter-col eg. 8" type="text" id="gc" val={gc} fnPrepareData={this.fnPrepareData} />
          </Col>

        </Row>
      </div>
      {
        col == '' ? '' : <Box n1={n1} a={a} gr={gr} gc={gc} b={b} />
      }

      {
        no == '' ? '' : <Row1 n1={n1} col={col} gr={gr} a3={a3} />
      }
     

    </div >


  );
};

export default template;
