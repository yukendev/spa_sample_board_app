import React from "react";
import { Card,CardTitle, CardText, CardBody } from 'reactstrap';
import UserIcon from '../../icons/UserIcon';
import { MessageBody } from "./MessageBody";

export const MessageCard = () => {
  return (
    <Card className="m-2">
      <CardBody className="d-flex">
        <div className="pr-4">
          <UserIcon/>
        </div>
        <MessageBody/>
      </CardBody>
    </Card>
  );
};