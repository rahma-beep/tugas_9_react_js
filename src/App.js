import React, { Component} from "react";
import
{ Navbar, Nav, NavDropdown, Row, Col, FormControl,
Form, Button, Breadcrumb, Table, Tab, Tabs, Container, ProgressBar, Pagination,
Popover, OverlayTrigger, Collapse, Spinner }
from "react-bootstrap";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      buka: true
    }
  }
  render(){
    const munculPopover = (
      <Popover>
      <Popover.Header as="h3">Informasi Website</Popover.Header>
      <Popover.Body>
      Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
      </Popover.Body>
    </Popover>
    );
    return (
      <div>
      <Navbar bg="dark">
      <Navbar.Brand href="#" style={{color: "white"}}>Akses Sport</Navbar.Brand>
      <Nav>
      <Nav.Item>
      <Nav.Link href="#" style={{color: "grey"}}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#" style={{color: "grey"}}>Berita</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#" style={{color: "grey"}}>Live Scores</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <NavDropdown title="Piala & Liga" id="nav-dropdown"/>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#" style={{color: "grey"}}>Transfer Pemain</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#" style={{color: "grey"}}>Tim</Nav.Link>
      </Nav.Item>
      </Nav>
      <Col>
      </Col>
      <Form className="d-flex">
      <FormControl type="text" placeholder="silahkan cari" />
      <Button variant="outline-info">Search</Button>
      </Form>
      </Navbar>
      <Row>
      <Col></Col>
      <Col></Col>
      <Col>
      <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
  <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
</Breadcrumb>
      </Col>
      <Col></Col>
      </Row>
      <Container>
      <Row>
      <Col>
      <h4>Rumor Pemain Transfer</h4>
      </Col>
      <Col></Col>
      <Col></Col>
      <Col>
      <Spinner animation="border" variant="success"/>
       <Spinner animation="grow" variant="success" />
      </Col>
        </Row>
      <Tabs defaultActiveKey="Semua Transfer">
      <Tab eventKey="Semua Transfer" title="Semua Transfer"></Tab>
      <Tab eventKey="Liga Primer Inggris" title="Liga Primer Inggris"></Tab>
      <Tab eventKey="Serie A" title="Serie A"></Tab>
      <Tab eventKey="Divisi Primera" title="Divisi Primera"></Tab>
      <Tab eventKey="Bundesliga" title="Bundesliga"></Tab>
      <Tab eventKey="Liga 1 Indonesia" title="Liga 1 Indonesia"></Tab>
      </Tabs>
      <Table>
      <thead>
      <tr>
      <th>#</th>
      <th>Nama Pemain</th>
      <th>Tim</th>
      <th>Transfer</th>
      <th>Proses Transfer</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>1</td>
      <td>MAROUANE FELLAINI</td>
      <td>MANCHESTER UNITED</td>
      <td>SHANDONG LUNENG</td>
      <td>
      <ProgressBar variant="primary" now={85} label="85%"/>
      </td>
      </tr>
      <tr>
      <td>2</td>
      <td>LUIS NANI</td>
      <td>SPORTING CP</td>
      <td>ORLANDO CITY</td>
      <td>
      <ProgressBar variant="primary" now={55} label="55%"/>
      </td>
      </tr>
      <tr>
      <td>3</td>
      <td>MAREK HAMSIK</td>
      <td>NAPOLI</td>
      <td>DALIAN YIFANG</td>
      <td>
      <ProgressBar variant="primary" now={95} label="95%"/>
      </td>
      </tr>
      <tr>
      <td>4</td>
      <td>SARDAR AZMOUN</td>
      <td>RUBIN KAZAN</td>
      <td>ZENIT ST PETERSBURG</td>
      <td>
      <ProgressBar variant="primary" now={100} label="100%"/>
      </td>
      </tr>
      <tr>
      <td>5</td>
      <td>MICHY BATSHUAYI</td>
      <td>CHELSEA</td>
      <td>CRYSTAL PALACE</td>
      <td>
      <ProgressBar variant="primary" now={50} label="50%"/>
      </td>
      </tr>
      <tr>
      <td>6</td>
      <td>LUCAS PIAZON</td>
      <td>CHELSEA</td>
      <td>CHIEVO</td>
      <td>
      <ProgressBar variant="primary" now={100} label="100%"/>
      </td>
      </tr>
      </tbody>
      </Table>
      <Pagination size="sm">
      <Pagination.First/>
      <Pagination.Prev/>
      <Pagination.Item active>1</Pagination.Item>
      <Pagination.Ellipsis/>
      <Pagination.Item>10</Pagination.Item>
      <Pagination.Item>11</Pagination.Item>
      <Pagination.Item>12</Pagination.Item>
      <Pagination.Item>13</Pagination.Item>
      <Pagination.Item>14</Pagination.Item>
      <Pagination.Ellipsis/>
      <Pagination.Item>20</Pagination.Item>
      <Pagination.Next/>
      <Pagination.Last/>
      </Pagination>
      <OverlayTrigger placement="right" trigger="click" overlay={munculPopover}>
  <Button variant="primary">Informasi</Button>
  </OverlayTrigger>
  <Button variant="primary"
  onClick={() => this.setState({ buka: !this.state.buka})}>
  Versi Website
  </Button>
  <Collapse in={this.state.buka}>
  <p>Akses Sport V1.0</p>
  </Collapse>
      </Container>
      </div>
    );
  }
}

export default App;
