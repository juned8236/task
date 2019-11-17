import React from "react";
import template from "./Box.jsx";
import { Row, Col } from 'antd';

class Box extends React.Component {

   renderTableData() {
      const { gc } = this.props

      return this.props.a.map((o, index) => {
         return (
            <td style={{paddingRight:gc}} >
               <table id='students'>
                  {index + 1}
               </table>
            </td>
         )

      })
   }
   renderTableData1() {
      const { gr, gc } = this.props;
      return this.props.b.map((o, index) => {
         return (
            <td style={{paddingRight:gc}}>
               <table id='students' >
                  {index + 1}
               </table>
            </td>
         )

      })
   }
   render() {
      const { gr, gc } = this.props;

      return (
         <div>
            <h1 id='title' >Box</h1>
               <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, gr]}   >
                  <Col >

                     {this.renderTableData()}
                  </Col>

                  <Col>
                     {this.renderTableData1()}
                  </Col>

               </Row >

         </div>
      )
   }
}


export default Box;
