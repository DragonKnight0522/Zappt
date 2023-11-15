import React from "react";
import { DataState } from "../../context/AuthProvider";
import { Accordion, Badge, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Placeholder from "react-bootstrap/Placeholder";
import { isEmpty } from "../../utils/util";
import { Dashboard } from "../Dashboard";
import { getImageURL } from "../../utils/api";

export const Search = () => {
  const { tableData } = DataState();

  const CardView = ({ info }) => (
    <Card>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/food/${info.id}`}
      >
        {!isEmpty(info.photo) ? (
          <Card.Img variant="top" src={getImageURL(info.photo)} />
        ) : (
          <Card.Img className="px-5 pt-3" variant="top" src="/zappt-mag.png" />
        )}
        <Card.Body>
          <Card.Title>{info.name}</Card.Title>

          {!isEmpty(info.editorial_summary) ? (
            <Card.Text>{info?.editorial_summary?.overview}</Card.Text>
          ) : (
            <p aria-hidden="true">
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
            </p>
          )}
          <p aria-hidden="true">{info.address}</p>
          {info.score > 5 && <Badge bg="success">Best choice</Badge>}
          {info.score > 3 && <Badge bg="success">Great choice</Badge>}
          {info.score > 0 && <Badge bg="success">Good choice</Badge>}
          {info.score === 0 && <Badge bg="primary">Maybe Pass</Badge>}
          {info.score < 0 && <Badge bg="secondary">Not a match</Badge>}
        </Card.Body>
      </Link>
    </Card>
  );

  return (
    <div>
      {!tableData.length ? <Dashboard /> : null}
      <Row xs={1} md={5}>
        {tableData.slice(0, Math.min(5, tableData.length)).map((info) => (
          <Col className="my-2" key={info.id}>
            <CardView info={info} />
          </Col>
        ))}
      </Row>
      {tableData.length > 5 && (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Show More</Accordion.Header>
            <Accordion.Body>
              <Row xs={1} md={5}>
                {tableData.slice(5, tableData.length).map((info) => (
                  <Col className="my-2" key={info.id}>
                    <CardView info={info} />
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  );
};
