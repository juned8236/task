import "./Row1.css";
import React from "react";
import { Row, Col } from 'antd';

function template() {
  return (
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 30]} style={{border: '1px solid #ddd'}}  >
      {this.props.n1.map(index =>
        <Col>
          {index }
        </Col>

  )
}
</Row >

  );
};

export default template;


