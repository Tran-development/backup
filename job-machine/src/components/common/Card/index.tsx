import React, { FunctionComponent } from 'react';
import { StyledCard } from './Card.styled';
import { CardType } from 'antd/es/card/Card';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';

interface CardProps {
  children?: React.ReactNode;
  dataCard?: any[];
  width?: string;
  type?: "inner" | undefined;
  other?: CardType,
  handleClick?: (prop: any) => void;
}

const Card: FunctionComponent<CardProps> = ({ handleClick, dataCard, width, ...other }) => {
  return (
    <StyledCard {...other}>
      {dataCard?.map((prop: any) => {
        const { title, content } = prop;
        return (
          <StyledCard.Grid hoverable={false} style={{ width }} key={title}>
            <div className="flex-between">
              <div className="item-text">
                <span>{title}</span>
                <p>{content}</p>
              </div>
              {prop.edit && (   
                <div className="item-img">
                  <BaseButton/>
                </div>
              )}
            </div>
          </StyledCard.Grid>
        );
      })}
    </StyledCard>
  );
};

export default Card;
