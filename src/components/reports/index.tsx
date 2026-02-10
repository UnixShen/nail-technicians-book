"use client";
import { useState } from 'react';

import { Button, Space, List } from 'antd-mobile';
import { ADD_TYPE, ADD_TYPE_VALUE } from "../home/types";
import { getPosts } from "@/service/api";

export const Reports = () => {
  const [type, setType] = useState<ADD_TYPE_VALUE>(ADD_TYPE_VALUE.ADD_INCOME);

  const handleSolve = async (type: ADD_TYPE_VALUE) => {
    console.log(type);
    setType(type);
    const res = await getPosts(type);
    if (res?.code === 200) {
      console.log(res);
    }
  }

  return <>
    <Space wrap className="p-4 bg-pink-100 rounded-2xl shadow-inner-soft flex justify-around items-center w-full mb-4">
      <Button block shape='rounded' size='middle' 
        className={type === ADD_TYPE_VALUE.ADD_INCOME ? "text-pink-500 ring-2 ring-pink-400" : ""} onClick={() => handleSolve(ADD_TYPE_VALUE.ADD_INCOME)}>业绩
      </Button>
      <Button block shape='rounded' size='middle' 
        className={type === ADD_TYPE_VALUE.ADD_EXPENSE ? "text-pink-500 ring-2 ring-pink-400" : ""} 
        onClick={() => handleSolve(ADD_TYPE_VALUE.ADD_EXPENSE)}>
          支出
      </Button>
      <Button block shape='rounded' size='middle' 
        className={type === ADD_TYPE_VALUE.ADD_INSIGHT ? "text-pink-500 ring-2 ring-pink-400" : ""} 
        onClick={() => handleSolve(ADD_TYPE_VALUE.ADD_INSIGHT)}>
          心得
      </Button>
    </Space>
    <List className="bg-pink-100 rounded-2xl shadow-inner-soft">
      <List.Item>1</List.Item>
      <List.Item>2</List.Item>
      <List.Item>3</List.Item>
    </List>
  </>;
}