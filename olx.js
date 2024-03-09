const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  
  let url="https://www.olx.com.pk/mobiles_c1411";
  for(let i=0; i<5;i++){
    await page.goto(url);

  const information=await page.evaluate(()=>{
    const main= document.querySelectorAll("._7e3920c1");
    const imgSrc=[];
    main.forEach((img)=>{
      let imageSource= img.querySelector("._219b7e0a img").src;
      let productPrice= img.querySelector("._1075545d._52497c97._96d4439a ._95eae7db").innerText;
      let productTitle= img.querySelector(".a52608cc a").title;
      imgSrc.push({Title:productTitle, Src:imageSource, Price:productPrice});
    })
    return imgSrc;
  });
  url=await page.evaluate(()=>{
    next = document.querySelector("._95dae89d").href;
    return next;
  })
      console.log(information);
  
    }
    await browser.close();
})();
