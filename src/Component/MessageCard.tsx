import React from "react";
import { Card,CardTitle, CardText, CardBody } from 'reactstrap';

export const MessageCard = () => {
  return (
    <Card className="m-2">
      <CardBody>
        <CardTitle>hogehoge</CardTitle>
        <CardText>fugafuga</CardText>
      </CardBody>
    </Card>
  );
};