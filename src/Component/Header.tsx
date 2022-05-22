import React from 'react';
import { Button } from 'reactstrap';

export const Header = () => {

  return (
    <div className='d-flex justify-content-between text-white app_header'>
      <div className='align-self-center'>サンプル掲示板</div>
      <Button color='light'>ログイン</Button>
    </div>
  );
};