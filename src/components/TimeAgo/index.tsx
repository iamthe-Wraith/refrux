import dayjs from 'dayjs';
import React, { useRef } from 'react';
import { TimeAgoContainer } from './styles';

interface IProps {
    className?: string;
    date: string;
}

export const TimeAgo: React.FC<IProps> = ({
    className = '',
    date,
}) => {
    const _date = useRef(dayjs(date)).current;

    return (
        <TimeAgoContainer className={ className }>
            { `${dayjs().diff(_date, 'days')} days ago` }
        </TimeAgoContainer>
    );
};
