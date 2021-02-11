import {
  followersIds,
  followersProfilePics,
  feedPicsData,
  placesData,
  sampleFeedExpData,
  sampleCommentsData,
} from "../Data/RawData";
import {
  generateOrderedArr,
  generateRandomOrderArr,
} from "../Functions/RandomOrderArrGenerator/RandomOrderArrGenerator";

const feedNumArr = generateOrderedArr(0, feedPicsData.length);
const feedRandNumArr = generateRandomOrderArr(feedNumArr);

export const randomFeedData = [];

feedRandNumArr.forEach((el) => {
  const profileRandNumArr = generateRandomOrderArr(
    generateOrderedArr(0, followersIds.length)
  );
  const profileNum = profileRandNumArr[0];
  const profileNum2 = profileRandNumArr[1];
  const placeRandNumArr = generateRandomOrderArr(
    generateOrderedArr(0, placesData.length)
  );
  const placeNum = placeRandNumArr[0];
  const expRandNumArr = generateRandomOrderArr(
    generateOrderedArr(0, sampleFeedExpData.length)
  );
  const expNum = expRandNumArr[0];
  const obj = {
    id: el,
    postedByProfilePic: followersProfilePics[profileNum],
    postedById: followersIds[profileNum],
    place: placesData[placeNum],
    pic: feedPicsData[el],
    mainLikerProfilePic: followersProfilePics[profileNum2],
    mainLikerId: followersIds[profileNum2],
    numLikers: Math.floor(Math.random() * 200 + 5) + " others",
    explanation: sampleFeedExpData[expNum],
    postedTime: Math.floor(Math.random() * 10 + 2) + " HOURS AGO",
    isLiked: false,
    isSaved: false,
  };
  randomFeedData.push(obj);
});

const commentsNumArr = generateRandomOrderArr(
  generateOrderedArr(0, sampleCommentsData.length)
);

export const commentData = [];

commentsNumArr.forEach((el) => {
  const obj = {
    id: el,
    postedById: followersIds[Math.floor(Math.random() * followersIds.length)],
    content: sampleCommentsData[el],
    isLiked: false,
  };
  commentData.push(obj);
});
