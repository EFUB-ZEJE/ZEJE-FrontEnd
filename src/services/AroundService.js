import API from '../utils/api';
import {getData} from '../data/LocalStorage';
import {ACCESS_TOKEN} from '../data/LocalStorage';

const AroundService = {
  getSproutPoints: async () =>
    API.get('/spots/flowers/today-visit/lists', {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  checkVisited: async (
    spotId, // 방문 여부 확인
  ) =>
    API.get(`/spots/flowers/today-visit?spot=${spotId}`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  saveVisited: async (
    spotId, // 방문한 것 저장.
  ) =>
    API.post(
      `/spots/flowers`,
      {spotId: spotId},
      {
        headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
      },
    ),
};

export default AroundService;
/*
{
    "spotId": 531,
    "contentId": 1890177,
    "category": "여행",
    "type": "자연",
    "name": "거미오름",
    "location": "제주특별자치도 제주시 구좌읍 종달리 산70",
    "description": "복합화산체이지만, 전체적인 모양은 남서향으로 벌어진 말굽형화구이다. 깔때기모양의 원형분화구(2개)와 삼태기모양의 말굽형화구도 갖고 있는 보기드문 복합형화산체이며, 다른 오름과는 사뭇 다른 생김새를 하고 있다. 피라미드형 봉우리, 돔형 봉우리를 갖고 있으며, 깔때기꼴 굼부리가 있는가 하면, 삼태기꼴 굼부리가 있다. 또한, 문어발처럼 등성이 가닥이 뻗친 기슭에는 새알처럼 귀여운 오름새끼들이 수없이 딸려있다. 전체적으로 급사면인데 비교적 완만한 북동사면 쪽으로 작은 길이 있으나 어느 쪽으로도 오를 수 있다.<br /><br />산상에는 4개의 봉우리가 뚜렷하며, 정상은 서쪽의 피라미드형 봉우리이다. 이 오름의 가장 두드러진 특징은 굼부리가 셋 있다는 것이다. 깔때기꼴이 2개, 삼태기꼴이 하나라는 보기 드문 복합형 화구이다. 정상봉 남동 직하에 제1깔때기, 그 밑으로 삼태기, 따로 떨어져 정상봉 남서사면 하단부에 제2깔때기가 있는 셈이다. 처음엔 옆구리의 삼태기꼴 굼부리가 없었던 것이 2차 분출로 이 부분이 무너져 내리면서 형성된 것으로 추정한다. 오름 서록은 자드락 길을 끼고 `문석이오름`과 맞닿아 있어 `문석이오름`을 거쳐 오르게 되면 제2깔때기를 먼저 보면서 오르게 된다. 남서록에서 북동록에 이르는 동반부 일대는 구릉의 연속인데다 들쭉날쭉 심한 굴곡을 이루며 자락에는 오름새끼(이류구)들이 수도 없이 널려 있다.<br /><br />오름생성 과정 : 처음 분화때 솟구쳐 나온 화산쇄설물이 정착, 거미오름이라는 화산체와 함께 산상에 화구(제1깔 때기)가 형성되고, 그 후 새로운 용암류의 분출로 인해 산상의 화구륜(火口輪) 일부가 파괴되면서 남서사면이 말굽형으로 파이는데 이 때의 산사태로 인해 용암류와 함께 흘러내린 토사가 곳곳에 이동 퇴적하여 봉곳봉곳 이류구로서 산재케 된 것으로 추정된다.<br /><br />거미오름- 사면이 둥그렇고 층층이로 언덕진 데다 산상에서 사방으로 뻗어 나간 모습이 마치 거미집 비슷하다 하여 불리어 졌으며, 여러 가닥의 등성이로 하여 거미 그 자체의 형상에 비유한 것으로도 추정된다.<br /><br />동검은오름(東巨文岳(동검은악), 東巨門岳(동거문악), 東巨門伊岳(동거문이악)- 송당리 서쪽에도 검은오름이 있어 이를 서검은오름, 거미오름을 동검은오름이라 부르게 되었다고 한다. (보통 동검은이(오름)라고 함) 서검은오름은 조천읍과의 경계에 걸쳐 있고, 동검은오름은 성산읍.표선면과의 접경지대에 위치한다. 어떤 기록에는 거미 `주`자를 쓴 蛛岳(주악)이라는 표기도 볼 수 있다고 한다. 조천읍 선흘리에 있는 `서검은오름`과 대비해서 동쪽에 있는 `검은오름`이라는 데서 `동검은오름` 또는 `동검은이(-오름)`이라고 한다. 오름이 검게 보인다는 데서 붙여진 것이고, 혹은 검은 거미와 같은 형상을 하고 있다는 데서 `거미오름`이라고도 한다. 그러나 `거미오름`이라 하는 것은 민간어원설이다.<br /><br />(표고 : 340m 비고 : 115m 둘레 : 3,613m 면적 : 466,283㎡ 저경 : 992m)<br>",
    "link": "<a href=\"http://www.visitjeju.net/\" target=\"_blank\" title=\"새창 : 제주 문화관광 사이트로 이동\">http://www.visitjeju.net/</a>",
    "mapX": "126.8063081059",
    "mapY": "33.4480572654",
    "image": ""
}
*/
