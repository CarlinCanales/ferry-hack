import { Dialog } from '@reach/dialog';
import useInterval from '@use-it/interval';
import Head from 'next/head';
import * as QRCode from 'qrcode.react';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { getDateTimeInParts } from '../common/utils';
import { GlobalStyles } from '../styles/globalStyles';
import { Activated, Code, Container, ElapsedTime, Expires, Riders } from '../styles/styles';

const Home = (): JSX.Element => {
  const getQrValue = (): string =>
    Math.random().toString() +
    Math.random().toString() +
    Math.random().toString() +
    Math.random().toString();

  const [hourPart, setHour] = useState('');
  const [minutePart, setMinute] = useState('');
  const [monthPart, setMonth] = useState('');
  const [dayPart, setDay] = useState('');
  const [yearPart, setYear] = useState('');
  const [timeRemaining, setTimeRemaining] = useState('00:59:00');
  const [color, setColor] = useState('#000');
  const [qrValue, setQrValue] = useState(getQrValue());
  const [numberOfRiders, setNumberOfRiders] = useState('4');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const { month, day, year, hour, minute } = getDateTimeInParts(
      {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        weekday: 'short',
        hour12: true,
      },
      new Date(new Date().getTime() + 60 * 60000),
    );

    setHour(hour);
    setMinute(minute);
    setMonth(month);
    setDay(day);
    setYear(year);
  }, []);

  const formatSeconds = (seconds: number): string => {
    return seconds < 10 ? `0${seconds}` : `${seconds}`;
  };

  useInterval(() => {
    const [hour, minute, second] = timeRemaining.split(':');
    const newSecond = second === '00' ? '59' : formatSeconds(parseInt(second, 10) - 1);

    setColor(parseInt(newSecond, 10) % 2 === 0 ? '#000' : '#bdbdbd');
    setTimeRemaining(`${hour}:${minute}:${second === '00' ? '59' : newSecond}`);
  }, 1000);

  useInterval(() => {
    setQrValue(getQrValue());
  }, 6000);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNumberOfRiders(e.target.value);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, []);

  return (
    <Container>
      <Head>
        <title>NYC Ferry</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Riders onClick={toggleOpen}>{numberOfRiders}</Riders>
      <ElapsedTime color={color}>{timeRemaining}</ElapsedTime>
      <Expires>{`EXPIRES AT ${hourPart}:${minutePart} PM`}</Expires>
      <Activated>{`DATE ACTIVATED: ${monthPart}/${dayPart}/${yearPart}`}</Activated>
      <Code>
        <QRCode size={166} value={qrValue} level="H" />
      </Code>
      <Dialog isOpen={isOpen}>
        <input type="number" step={1} onChange={handleChange} onBlur={toggleOpen} />
      </Dialog>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;