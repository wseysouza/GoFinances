import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Data,


} from './styles';

interface Category {
  key: string;
  name: string;
  icon: string;
};

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
};

interface Props {
  data: TransactionCardProps;
};

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>
        {data.title}
      </Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>
            {data.category.name}
          </CategoryName>
        </Category>
        <Data>
          {data.date}
        </Data>
      </Footer>

    </Container>
  )
};