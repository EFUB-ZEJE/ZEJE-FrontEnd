import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import font from '../../styles/font';
import SortButton from '../Around/SortButton';
import ImageCard from '../Around/ImageCard';
import ListService from '../../services/ListService';
export default function WishList() {
  const [sortId, setSortId] = useState(0); // 0: 최신순, 1: 과거순
  //true 상태 data 만 들어옴

  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    ListService.getWishList()
      .then(res => {
        if (res.status == 200) {
          setWishList(res.data);
          //console.log(res.data);
        } else {
          console.log('위시리스트를 가져오지 못했습니다.');
        }
      })
      .catch(err => console.log(err));
  }, []);

  const _deleteFromWishList = id => {
    let newData = [...wishList];

    for (var idx in wishList) {
      if (newData[idx].wishId == id) {
        const deleteId = newData[idx].spotDTO.spotId;
        // 1. 삭제 api 요청
        ListService.deleteWishList(deleteId)
          .then(res => {
            if (res.status == 200) {
              console.log('success deleting wishlist');

              //2. state 변경
              newData.splice(idx, 1);
            } else {
              console.log('delete wishlist failed');
            }
            setWishList(newData);
          })
          .catch(err => console.log(err));

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
          {wishList
            .slice()
            .reverse()
            .map(place => (
              <ImageCard
                key={place.wishId}
                id={place.wishId}
                image={place.spotDTO.image}
                title={place.spotDTO.name}
                address={place.spotDTO.location}
                liked={true}
                handleLike={() => _deleteFromWishList(place.wishId)}
              />
            ))}
        </>
      ) : (
        <>
          {wishList.map(place => (
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
