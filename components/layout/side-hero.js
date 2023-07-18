import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import classes from './side-hero.module.css';
import Image from 'next/image';

export default function TemporaryDrawer() {
  const [state, setState] = useState({ left: false });
  const sideHeroIcon = '>';
  const left = 'left';

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={classes.container}>
      <Fragment>
        <Button onClick={toggleDrawer(left, true)} className={classes.toggleBtn} >{sideHeroIcon}</Button>
        <Drawer anchor={left} open={state[left]} onClose={toggleDrawer(left, false)}>
          <Box
            sx={{ width: 450 }}
            role="presentation"
            onClick={toggleDrawer(left, false)}
            onKeyDown={toggleDrawer(left, false)}
          >
            <section className={classes.hero}>
              <div className={classes.image}>
                <Image
                  src='/images/site/BlogPic.jpeg'
                  alt='An image showing Zeze'
                  width={300}
                  height={300}
                />
              </div>
              <h1>Zeze</h1>
              <p>
                안녕하세요 재재입니다. <br />
                Zeze의 블로그 Zelog에 오신 것을 환영합니다. <br />
                저는 웹 FE 개발자입니다. <br />
                주 언어는 JavaScript / TypeScript 입니다. <br />
                특히 React와 Next에 관련된 포스팅을 합니다. <br />
              </p>
              <h3>연혁</h3>
              <p>
                - 호주 Ipswich Grammar Boys Junior School 졸업 <br />
                - 인천아시안게임 전문 통역 요원 <br />
                - 광주유니버시아드 전문 통역 요원 <br />
                - 호텔경영학과 졸업 <br />
                - 고려대학교 컴퓨터융합소프트웨어학과 졸업 <br />
                - 엑심베이 IT Sourcing SQ 웹 FE 개발자 <br />
                - 제로베이스 프론트엔드 스쿨 & 커넥투 수료 <br />
                - 우아한테크코스 프리코스 수료 <br />
                - 원티드 프론트엔드 프리 온보딩 수료 <br />
              </p>
            </section>
          </Box>
        </Drawer>
      </Fragment>
    </div>
  );
}
