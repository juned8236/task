import React from "react";
import template from "./Row1.jsx";
import { Row, Col } from 'antd';

class Row1 extends React.Component {

   renderTableData() {
    const {gr}=this.props
      return (
         <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, gr]}   >
            {this.props.n1.map((o, index) => {
               return (

                  <Col>
                     <table id='students1'>
                        {index + 1}
                     </table>
                  </Col>
               )
            })
            }
         </Row >
      )
   }
   render() {

      return (
         <div>
            <h1 id='title1' >No. of Row 100px Height Box</h1>
            {this.renderTableData()}
         </div>
      )
   }
}


export default Row1;
