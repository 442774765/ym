/**
 * mock JS from elecV2P - 看视频奖励.js
**/

const request = {
  "url": "https://api5-normal-lq.toutiaoapi.com/luckycat/lite/v1/task/done/excitation_ad?iid=3703610731138590&device_id=501832763318556&ac=4g&channel=lite_xiaomi_64&aid=35&app_name=news_article_lite&version_code=850&version_name=8.5.0&device_platform=android&os=android&ab_version=668907%2C3491710%2C668903%2C3491704%2C1859937%2C668908%2C3491714%2C668905%2C3491678%2C668906%2C3491686%2C668904%2C3491669%2C3564447%2C3269751&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&ab_group=z1&ab_feature=z1&abflag=3&ssmix=a&device_type=MI+9&device_brand=Xiaomi&language=zh&os_api=29&os_version=10&manifest_version_code=8500&resolution=1080*2135&dpi=440&update_version_code=85008&_rticket=1640337595883&sa_enable=0&dq_param=0&plugin_state=280418948640797&session_id=97e3a85c-2480-4c3c-a350-f7266c0ab264&host_abi=arm64-v8a&tma_jssdk_version=2.8.0.14&rom_version=miui_v10_9.8.22&cdid=1200adf4-e0b0-4c42-8943-bbbff2cbc6c5",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json; charset=UTF-8",
    "Host": "api5-normal-lq.toutiaoapi.com",
    "cookie": "MONITOR_WEB_ID=bd1bf5a7-854c-49a9-b496-0bacd10975f8",
    "x-ss-req-ticket": "1640337595887",
    "x-tt-dt": "AAA3FMET3GYXOQ4R3B4QXBSK7NUBBIHPLYQVFESZ3HFWRD2JLPZVDPZ5CU7MABWIZ3K7ING63AWPBX6CSL3IE5MTQNRTHDQUZKXPZQEIQOICZG6VM2RQ4UUBSNEKYYSJWZIDJ77WPBRQZU5BXDVEN6Q",
    "sdk-version": "2",
    "x-tt-token": "00b0a05f222af06509fbff24ada59edb1100f19acd49a7d0d9aee688c47e1061df4c64e912cf034a9e17142e76e6c5e66bf409c6522bc431cfc79c3626d8e1147b873cc7a4ba649b826daddf954594c1dc8f6b47f8587e7b9f25c1dc81c096416b3fe-1.0.1",
    "passport-sdk-version": "30",
    "x-vc-bdturing-sdk-version": "2.0.0",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 10; MI 9 MIUI/9.8.22) NewsArticle/8.5.0 cronet/TTNetVersion:6be24b75 2021-10-19 QuicVersion:705d0b81 2021-08-12",
    "content-type": "application/json; charset=UTF-8",
    "x-ss-stub": "E58983DD09A862B5607808C7317787D7",
    "x-ss-dp": "35",
    "x-tt-trace-id": "00-ebbd5f7f0d1c86a0b98211c017f10023-ebbd5f7f0d1c86a0-01",
    "x-ladon": "2MhlHfEoGXJ9S3bCqLFFbBjrneJkSd+h4ULHkURDfwEJGeT1",
    "x-khronos": "1640337597",
    "x-argus": "SLnduTuMcNYPgOYJ1t6nNBYp6/ssO7M9s37jIkXVUfOa/CnMc7SibJfbQWwUux8rjticUzdUNB0HoQRkO35f2R78RDLKGkCeVy8D3zbLh24qfEJQrFinMco15+dCM/B2FFx05zj+wr94xBrOvt/TYCKS/+0juwOkuVouI+/J+HakNeKuuOAzQuLzvNUA8dLUfEafYf3EPsnVWRfhzHkhucJsdjJQOvYmzQVwyiGd2y+Z4UaM5lkRaA+s0JRjnV/W+kTJ+EzCP+Vgn2nq0eDE6Uvq",
    "x-gorgon": "8404808501051ee564fa74ab7d45f6e43a1debb8d2028c9e1a10",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; OPPO R9s Plus Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36"
  },
  "body": {
    "task_id": "225",
    "extra": {
      "stage_score_amount": [
        290,
        150
      ],
      "track_id": "7045196187729298176"
    }
  }
}

$axios(request).then(res=>{
  console.log(res.data)
}).catch(e=>{
  console.error(e)
})