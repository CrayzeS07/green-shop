"use client";
import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import axios from "axios";
import { URL } from "@/service/request";

interface TagsType {
  id: string;
  title: string;
}
interface PropsType {
  setTagId: (key: string) => void;
}

const TabsN: React.FC<PropsType> = ({ setTagId }) => {
  const onChange = (key: string) => {
    setTagId(key);
  };
  const [items, SetItemsData] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/tag-navbar`).then((res) => {
      SetItemsData(
        res.data.map((item: TagsType) => ({ key: item.id, label: item.title }))
      );
    });
  }, []);
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default TabsN;
