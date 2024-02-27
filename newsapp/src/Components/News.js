import React, { Component } from "react";
import NewsItems from "./NewsItems";
import axios from "axios";

export default class News extends Component {
  article = [
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "Lee Anderson: MP suspended from Tory party over 'Islamists' comments - BBC.com",
      description:
        'The party suspends Lee Anderson over claims "Islamists" had "got control" of London Mayor Sadiq Khan.',
      url: "https://www.bbc.com/news/uk-politics-68392621",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/169B0/production/_132729529_gettyimages-1982066981.jpg",
      publishedAt: "2024-02-24T17:25:19Z",
      content:
        'By Thomas MackintoshBBC News\r\nLee Anderson told GB News Islamists had "got control" of Mr Khan and he had "given our capital city away to his mates".\r\nFormer Tory deputy chairman Lee Anderson has bee… [+2147 chars]',
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Jamiel Lynch, Dalia Faheid",
      title:
        "Suspect in University of Georgia killing didn’t know victim and is not a student on the campus, police say - CNN",
      description:
        "The suspect in the killing of an Augusta University College of Nursing student on the University of Georgia campus in Athens did not attend school at the campus and did not know the victim, authorities said Friday.",
      url: "https://www.cnn.com/2024/02/24/us/uga-augusta-university-student-death-saturday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/laken.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-02-24T17:09:00Z",
      content:
        "The suspect in the killing of an Augusta University College of Nursing student on the University of Georgia campus in Athens did not attend school at the campus and did not know the victim, authoriti… [+5448 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Michael Schneider",
      title:
        "How to Watch the SAG Awards on Netflix Without Commercials Even if You Have the Ad Tier, and How Long Before It’s Pulled Off the Streamer - Variety",
      description:
        "Pro tip for Screen Actors Guild Awards viewers whose Netflix subscription comes with ads: Watch it live. The SAG Awards airs Saturday at 5 p.m. PT.",
      url: "https://variety.com/2024/tv/news/sag-awards-netflix-without-ads-commercial-free-when-will-be-pulled-1235921229/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2024/02/GettyImages-1469875816-1-e1708747944517.jpg?w=1000&h=563&crop=1",
      publishedAt: "2024-02-24T17:00:00Z",
      content:
        "Pro tip for Screen Actors Guild Awards viewers: Watch it live. That’s because even those Netflix subscribers on the cheaper advertising tier will still get a commercial-free experience when the telec… [+5028 chars]",
    },
    {
      source: {
        id: null,
        name: "The Athletic",
      },
      author: "Anthony Slater",
      title:
        "Warriors, coach Steve Kerr agree to 2-year contract extension: Sources - The Athletic",
      description:
        "With less than a half-season remaining on his current coaching contract, Steve Kerr has finally agreed to a contract extension with the Warriors. The terms: Two years, $35 million, as team sources confirmed late Friday night. ESPN was first to report the deal…",
      url: "https://theathletic.com/5296354/2024/02/23/warriors-steve-kerr-extension/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/08/09172002/USATSI_20624191-1-scaled.jpg",
      publishedAt: "2024-02-24T16:41:25Z",
      content:
        "With less than a half-season remaining on his current coaching contract, Steve Kerr has finally agreed to a contract extension with the Warriors. The terms: Two years, $35 million, as team sources co… [+1857 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "Valencia fire: Last couple saved hail dramatic rescue - BBC.com",
      description:
        "Sara Jorge and her boyfriend say they were saved by a mixture of luck and a desire to live.",
      url: "https://www.bbc.com/news/world-europe-68390343",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/4580/production/_132729771_mediaitem132729767.jpg",
      publishedAt: "2024-02-24T16:00:26Z",
      content:
        "By Mark LowenBBC News, Valencia\r\nOn Thursday a fire swept through a 14-storey apartment block in the Spanish city of Valencia, killing 10 people. The BBC's Mark Lowen has spoken to the last couple to… [+5421 chars]",
    },
    {
      source: {
        id: null,
        name: "POLITICO.eu",
      },
      author: "Louise Guillot",
      title:
        "Gaza truce talks in Paris reportedly making 'significant progress' - POLITICO Europe",
      description:
        "Efforts to broker a truce appeared to regain momentum after a senior U.S. envoy for the Middle East met with Israeli leaders.",
      url: "https://www.politico.eu/article/israel-hamas-war-gaza-truce-paris-progress/",
      urlToImage:
        "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2024/02/24/GettyImages-2028009449-scaled.jpg",
      publishedAt: "2024-02-24T15:38:00Z",
      content:
        "These talks come as air strikes killed about a hundred people in the Gaza Strip on Friday, according to Hamas.\r\nInternational efforts to broker a truce appeared to regain momentum this week after Bre… [+999 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Ivana Kottasova, Olga Voitovych, Crendon Greenway",
      title:
        "As US Congress stalls on aid, Ukrainian soldiers head to the frontlines knowing they don’t have enough ammunition - CNN",
      description:
        "Artem spends a lot of time thinking about the shots he can’t afford to take.",
      url: "https://www.cnn.com/2024/02/24/europe/ukraine-ammunition-shortage-us-congress-russia-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/artillery-rare-position.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-02-24T15:32:00Z",
      content:
        "Kostyantynivka, eastern UkraineCNN\r\n  — \r\nArtem spends a lot of time thinking about the shots he cant afford to take.\r\nAs a battery commander in the 26th Artillery Brigade of the Ukrainian military, … [+8788 chars]",
    },
    {
      source: {
        id: null,
        name: "Sports Illustrated",
      },
      author: "Omar Kelly",
      title:
        "Miami Dolphins will be challenged to replace Xavien Howard, who was Chris Grier's top draft pick during his tenure as General Manager - Sports Illustrated",
      description:
        "Jalen Ramsey expresses disappointment that the Miami Dolphins didn't use him and Xavien Howard properly in last year's defense",
      url: "https://www.si.com/nfl/dolphins/news/miami-dolphins-must-replace-xavien-howard",
      urlToImage:
        "https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_620%2Cx_2294%2Cy_550/MjAxNTQ1MzQxMzk1MjgxNDk1/usatsi_21604048_168390362_lowres.jpg",
      publishedAt: "2024-02-24T15:10:28Z",
      content:
        "Xavien Howard will go down in history as the best draft pick in the Chris Grier era of running the Miami Dolphins franchise.\r\nHoward, a former Baylor standout, was the second ever draft selection mad… [+5714 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Theron Mohamed",
      title:
        "Warren Buffett calls out stock-market gamblers in his annual letter - Business Insider",
      description:
        'Warren Buffett\'s annual letter slammed speculators who buy "hot stocks" like "lottery tickets." He also celebrated his late partner, Charlie Munger.',
      url: "https://www.businessinsider.com/warren-buffett-letter-munger-berkshire-annual-shareholder-stock-speculation-ai-2024-2",
      urlToImage:
        "https://i.insider.com/65d9fba190413ab8e1d6a503?width=1200&format=jpeg",
      publishedAt: "2024-02-24T14:51:00Z",
      content:
        "Warren Buffett paid tribute to Charlie Munger, touted four of Berkshire Hathaway's biggest bets, and voiced frustration in his annual letter to shareholders published on Saturday.\r\nThe famed investor… [+3591 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Caitlin Yilek",
      title:
        "On 2024 South Carolina GOP primary election day, does former Gov. Nikki Haley have the pull to beat Trump? - CBS News",
      description:
        "Donald Trump and Nikki Haley face off in the 2024 South Carolina Republican primary election Saturday.",
      url: "https://www.cbsnews.com/news/2024-south-carolina-republican-primary/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2024/02/19/eb2e08f4-776e-47e6-9650-894aca10f08a/thumbnail/1200x630g2/c87ecae1e73ce94a5645f70274b19106/gettyimages-1047997614.jpg?v=26439302e0bbe3219b6ef78d2fd37ce0",
      publishedAt: "2024-02-24T14:18:31Z",
      content:
        "Washington — Nikki Haley appears poised to lose in her home state as she goes up against former President Donald Trump in South Carolina's 2024 Republican primary on Saturday, but she has vowed to pr… [+4325 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "SUSIE BLANN",
      title:
        "Russia-Ukraine war anniversary: Western leaders in Kyiv as Russian drone hits Odesa - The Associated Press",
      description:
        "President Volodymyr Zelenskyy has welcomed Western leaders to Kyiv to mark the second anniversary of Russia’s full-scale invasion, as Ukrainian forces run low on ammunition and foreign aid hangs in the balance. Zelenskyy posted a video from the Hostomel airfi…",
      url: "https://apnews.com/article/russia-ukraine-war-second-anniversary-65088ba9eb9bd729cf8c677e2115cb35",
      urlToImage:
        "https://dims.apnews.com/dims4/default/82ba505/2147483647/strip/true/crop/8141x4579+0+424/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa3%2F20%2Fc7522738b257245e8c3899268a4a%2F3eb0875fc57145bca25b2a6bd9597797",
      publishedAt: "2024-02-24T13:57:00Z",
      content:
        "KYIV, Ukraine (AP) President Volodymyr Zelenskyy welcomed Western leaders to Kyiv Saturday to mark the second anniversary of Russias full-scale invasion, as Ukrainian forces run low on ammunition and… [+6103 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "Trump filing says phone records contradict Fulton County prosecutor Fani Willis' timeline of affair - BBC.com",
      description:
        "A legal filing says text and geolocation data contradicts Fani Willis and Nathan Wade's relationship timeline.",
      url: "https://www.bbc.com/news/world-us-canada-68388603",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/123DC/production/_132661747_gettyimages-1601917543.jpg",
      publishedAt: "2024-02-24T13:50:47Z",
      content:
        "Fani Willis has admitted to a relationship with Nathan Wade, a prosecutor she hired for the Trump case.\r\nDonald Trump's legal team says mobile phone data suggest two prosecutors investigating him did… [+3695 chars]",
    },
    {
      source: {
        id: null,
        name: "NESN",
      },
      author: "Tim Crowley",
      title:
        "Patriots Rumors: Potential Wide Receiver Target Franchise Tagged By Bengals - NESN",
      description:
        "The New England Patriots will have to look elsewhere for a new wide receiver after the Cincinnati Bengals franchise tagged their star.",
      url: "https://nesn.com/2024/02/patriots-rumors-potential-wide-receiver-target-franchise-tagged-by-bengals/",
      urlToImage:
        "https://nesn.com/wp-content/uploads/sites/5/2024/02/tee-higgins_639001.jpg",
      publishedAt: "2024-02-24T13:48:23Z",
      content:
        "<li>Bruins Centennial</li><li>Spacer</li><li>Boston Bruins</li><li>Scores &amp; Schedule</li><li>Player Stats</li><li>Roster</li><li>Injuries</li><li>Transactions, Trades, and Free Agents</li><li>Spa… [+2408 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: null,
      title:
        "The Xiaomi 14 Ultra's camera grip works with rival phones too - Android Authority",
      description:
        "The new Xiaomi 14 Ultra has an optional camera grip, but it turns out that the accessory supports various phones from other brands.",
      url: "https://www.androidauthority.com/xiaomi-14-ultra-camera-grip-support-other-phones-3418857/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2024/02/Xiaomi-14-Ultra-white-camera-grip.jpg",
      publishedAt: "2024-02-24T13:35:31Z",
      content:
        "<ul><li>The Xiaomi 14 Ultras camera grip works with phones from rival brands too.</li><li>Unfortunately, the accessory doesnt fit the Galaxy S24 Ultra, HONOR Magic 6 Pro, or Nubia Z60 Ultra.</li></ul… [+1453 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "William Harwood",
      title:
        "Odysseus moon lander tipped over onto its side during touchdown, company says - CBS News",
      description:
        "Intuitive Machines says despite its off-kilter touchdown, the Odysseus moon lander can still accomplish most of its objectives.",
      url: "https://www.cbsnews.com/news/moon-lander-tipped-over-on-its-side-during-touchdown/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2024/02/24/344a0ada-3ff6-4e02-ae98-b83eecf1588d/thumbnail/1200x630/3d47ec99690a99467302c4a4f03206ea/lander-cleanroom2.jpg?v=26439302e0bbe3219b6ef78d2fd37ce0",
      publishedAt: "2024-02-24T13:08:00Z",
      content:
        "Intuitive Machines' Odysseus moon lander, coming down faster than expected and moving slightly to one side at the moment of touchdown Thursday, apparently caught a footpad on the lunar surface and ti… [+7189 chars]",
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Brett Tingley",
      title:
        "February's Full Snow Moon rises tonight, the smallest full moon of 2024 - Space.com",
      description:
        "The Full Snow Moon will rise around 6:30 p.m. local time in the east, just as the sun is setting in the west.",
      url: "https://www.space.com/full-moon-rises-tonight-february-2024",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/ynFzPZDi4TsrDmBEMNknYC-1200-80.jpg",
      publishedAt: "2024-02-24T13:00:28Z",
      content:
        "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036.",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Elizabeth Lopatto",
      title: "A lot of Redditors hate the Reddit IPO - The Verge",
      description:
        "Reddit seems like a likely candidate for a meme stock. But  the actual reaction suggests that r/WallStreetBets isn’t going to send the stock to the moon.",
      url: "https://www.theverge.com/2024/2/24/24081441/reddit-shares-redditor-ipo-user-risk",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/w2vDHmVrb5oLz3TnIzfWrmhmimI=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25137777/STK115_Reddit_01.jpg",
      publishedAt: "2024-02-24T13:00:00Z",
      content:
        "A lot of Redditors hate the Reddit IPO\r\nA lot of Redditors hate the Reddit IPO\r\n / Reddit warned us that its users were a risk factor, and boy do they sound excited about shorting its stock.\r\nByEliza… [+8928 chars]",
    },
    {
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "Daniel Sparks, The Motley Fool",
      title: "Nvidia Stock: Headed to $1,100? - Yahoo Finance",
      description:
        "Despite the tech stock skyrocketing almost 240% in 2023 and more than 55% in 2024, this analyst thinks shares could soar even higher over the next 12 months.",
      url: "https://www.fool.com/investing/2024/02/24/nvidia-stock-headed-to-1100/?source=eptyholnk0000202&utm_source=yahoo-host-full&utm_medium=feed&utm_campaign=article",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/3B4toZZ7gkuKv.JST5r0Gw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzY-/https://media.zenfs.com/en/motleyfool.com/264554b2251741c9544fbf4bfa7a5efc",
      publishedAt: "2024-02-24T12:21:00Z",
      content:
        "Benefiting from the current boom in artificial intelligence, semiconductor company Nvidia(NASDAQ: NVDA) was arguably the hottest stock on Wall Street in 2023. Even more impressive, it's off to an exp… [+5310 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mariella Moon",
      title:
        "Google explains why Gemini's image generation feature overcorrected for diversity - Engadget",
      description:
        "After promising to fix Gemini's image generation feature and then pausing it altogether, Google has published a blog post offering an explanation for why its...",
      url: "https://www.engadget.com/google-explains-why-geminis-image-generation-feature-overcorrected-for-diversity-121532787.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/8jyyac4oXkPodApCJY.lOA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-02/6bcc4f00-d2fb-11ee-bffe-937b9b40187d",
      publishedAt: "2024-02-24T12:15:32Z",
      content:
        "After promising to fix Gemini's image generation feature and then pausing it altogether, Google has published a blog post offering an explanation for why its technology overcorrected for diversity. P… [+2400 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Eric Lagatta",
      title:
        "Solar eclipse glasses: Where to get them for 2024 event, more to know - USA TODAY",
      description:
        "The only safe way to watch the April 8 total solar eclipse is with approved glasses or a handheld solar viewer. Here's what you need to know.",
      url: "https://www.usatoday.com/story/money/shopping/2024/02/24/solar-eclipse-glasses-where-to-get-them-2024/72601568007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/20/USAT/72669764007-usatsi-22016723.jpg?crop=2999,1687,x0,y186&width=2999&height=1687&format=pjpg&auto=webp",
      publishedAt: "2024-02-24T12:00:37Z",
      content:
        "If you're planning to gaze upon the upcoming Great American Eclipse in April through run-of-the-mill sunglasses, you're doing it wrong.\r\nIn the face of the sun's powerful rays, regular specs made of … [+6234 chars]",
    },
  ];
  constructor() {
    console.log("constructor call");
    super();
    this.state = {
      article: this.article,
      loading: false,
      page: 1,
    };
  }

  componentDidMount() {
    console.log("mount working");
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-01-26&sortBy=publishedAt&apiKey=8af99d7dbbc7411ab296f715c3372af3&pageSize=20"
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          article: json.articles,
          loading: true,
        });
      });
  }

  // async componentDidMount() {
  //   console.log("api working");
  //   fetch(
  //     "https://newsapi.org/v2/top-headlines?country=in&apiKey=8af99d7dbbc7411ab296f715c3372af3"
  //   ).then((result) => {
  //     let data = result.json();
  //     console.log(data);
  //     this.setState({
  //       article: data.articles,
  //     });
  //   });
  // }
  handlenext = () => {
    //console.log("next is working");
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-01-26&sortBy=publishedAt&apiKey=8af99d7dbbc7411ab296f715c3372af3&page=${
        this.state.page + 1
      }pageSize=20`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          article: json.articles,
          loading: true,
          page: this.state.page + 1,
        });
      });
  };
  handleprev = () => {
    console.log("prev");
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-01-26&sortBy=publishedAt&apiKey=8af99d7dbbc7411ab296f715c3372af3&page=${
        this.state.page - 1
      }pageSize=20`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          article: json.articles,
          loading: true,
          page: this.state.page - 1,
        });
      });
  };
  render() {
    console.log("render call");
    return (
      <div className="container my-3">
        <h2>NewsApp -Top Headlines</h2>

        <div className="row">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 45) : ""}
                  decription={
                    element.description ? element.description.slice(0, 88) : " "
                  }
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              class="btn btn-dark"
              onClick={this.handleprev}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              class="btn btn-dark"
              onClick={this.handlenext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
