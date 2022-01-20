import { Row, Col } from "antd"
import { DeviceStorage } from "../../dataStorage/storage"

export default () => {
    return         <Row>
    <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3} style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px' }}>
      bbs
    </Col>
  </Row>
}