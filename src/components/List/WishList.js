import {View, Text} from 'react-native';
import React, {useState} from 'react';
import font from '../../styles/font';
import SortButton from '../Around/SortButton';
import ImageCard from '../Around/ImageCard';

export default function WishList() {
  const [sortId, setSortId] = useState(0); // 0: 최신순, 1: 과거순
  //true 상태 data 만 들어옴

  const [wishList, setWishList] = useState([
    {
      wishId: 2,
      userId: 5,
      spotDTO: {
        spotId: 2,
        contentId: 0,
        category: '여행',
        type: '비건, 식당',
        name: '아살람 레스토랑',
        location: '제주특별자치도 제주시 삼도이동 1-2 1층',
        description:
          '아살람레스토랑은 예멘출신의 경험이 많은 쉐프가 한국인여성(와르다)과 결혼 후 한국 최초로 제주에 오픈한 아랍레스토랑이며, 모든 고기는 할랄을 사용합니다.\n무슬림이 기도할수 있는 기도실도 준비되어 있습니다.\n항상 사랑과 행복과 함께 요리하는 레스토랑이 되겠습니다.',
        link: 'http://Instagram.com/jejuhalalasalam',
      },
    },
    {
      wishId: 3,
      userId: 5,
      spotDTO: {
        spotId: 4,
        contentId: 0,
        category: '여행',
        type: '비건, 식당',
        name: '스토브온 제주',
        location: '제주특별자치도 제주시 한림읍 상명리 1036',
        description:
          '천연 효모 발효 72시간 저온 숙성 도우와 직접 키운 채소 및 허브를 넣은 수제 소스로 만든 네모난 1인용 화덕피자입니다.',
        link: 'http://pf.kakao.com/_ryIxexb',
      },
    },
  ]);

  const _handleLikeChange = id => {
    let newData = [...wishList];

    for (var idx in wishList) {
      if (newData[idx].wishId == id) {
        newData.splice(idx, 1);
        setWishList(newData);
        return;
      }
    }
  };

  const sorts = [
    {id: 0, title: '최신순'},
    {id: 1, title: '과거순'},
  ];

  const _handlePressSortBtn = () => {
    console.log(sortId);

    if (sortId == 0) setSortId(1);
    else if (sortId == 1) setSortId(0);
  };
  console.log(wishList.length);
  let empty = wishList.length == 0;

  return (
    <View>
      <SortButton
        sortBy={sorts[sortId].title}
        handlePress={_handlePressSortBtn}
      />
      {sorts[sortId].title == '최신순' ? (
        <>
          {!empty &&
            wishList
              .reverse()
              .map(place => (
                <ImageCard
                  key={place.wishId}
                  id={place.wishId}
                  title={place.spotDTO.name}
                  address={place.spotDTO.location}
                  liked={true}
                  handleLike={() => _handleLikeChange(place.wishId)}
                />
              ))}
        </>
      ) : (
        <>
          {!empty &&
            wishList.map(place => (
              <ImageCard
                key={place.wishId}
                id={place.wishId}
                title={place.spotDTO.name}
                address={place.spotDTO.location}
                liked={true}
                handleLike={() => _handleLikeChange(place.wishId)}
              />
            ))}
        </>
      )}
    </View>
  );
}
