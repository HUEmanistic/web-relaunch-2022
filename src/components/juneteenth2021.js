import React, { useState } from "react";
import Navbar from "./navbar";
import { UncontrolledCollapse, CardBody } from "reactstrap";
import {
  MainContainer,
  // HeaderImg,
  TitleRow,
  PageTitle,
  ContentContainer,
  RowNoOutline,
  RowOutline,
  ContentCol,
  ContentCol2,
  CategoryTitle,
  Italics,
  Subcat,
  Page,
  FlagIcon,
  FoodIcon,
  EventsIcon,
  HistoryIcon,
  LinkCard,
  ResourceLink,
  Books,
  IconCardTitle,
  IconCard,
  MobileContentCol2,
  MobileHistory,
  MobileFlag,
  MobileFood,
  MobileEvents,
  MobileBooks,
  MobileText,
  MobileCollapse,
  MobileIconCard,
  MobileIconCardTitle,
  MobileRowNoOutline,
  MobileCategoryTitle,
  MobileCardBody,
  MobileRule,

} from "../styles/juneteenth_styles";

function Juneteenth() {
  const [toggleStatus, setToggleStatus] = useState({"history": false, "flag": false, "food": false, "events": false, "books": false});

  const toggle = (section) => {
    let newState = {}
    for(let s of ["history", "flag", "food", "events", "books"]) {
      if(section === s) {
        if(toggleStatus[section]) {
          newState[s] = false
        } else {
          newState[s] = true
        }
      } else {
        newState[s] = false
      }
    }
    setToggleStatus(newState);
  }
  return (
    <Page>
      <MainContainer>
        <Navbar />

        <ContentContainer>
          <TitleRow>
            <PageTitle>Celebrate Juneteenth with HUEmanistic!!!</PageTitle>
          </TitleRow>
          <RowNoOutline>
            <ContentCol>
              <Italics>
                Want to learn more about Juneteeth's traditions, origin, and
                history? You've come to the right place! Our HUEmanistic team
                wishes you a Happy Juneteenth!
              </Italics>
            </ContentCol>
          </RowNoOutline>
          <RowOutline>
            <RowNoOutline>
              <ContentCol2>
                <IconCard id="history" onClick={() => toggle('history')}>
                  <HistoryIcon />
                  <IconCardTitle>History</IconCardTitle>
                </IconCard>
              </ContentCol2>
              <ContentCol2>
                <IconCard onClick={() => toggle('flag')} id="flag">
                  <FlagIcon />
                  <IconCardTitle>Flag</IconCardTitle>
                </IconCard>
              </ContentCol2>
              <ContentCol2>
                <IconCard id="food" onClick={() => toggle('food')}>
                  <FoodIcon />
                  <IconCardTitle>Food, Drink, &amp; Recipes</IconCardTitle>
                </IconCard>
              </ContentCol2>
              <ContentCol2>
                <IconCard id="events" onClick={() => toggle('events')}>
                  <EventsIcon />
                  <IconCardTitle>Events</IconCardTitle>
                </IconCard>
              </ContentCol2>
              <ContentCol2>
                <IconCard id="books" onClick={() => toggle('books')}>
                  <Books />
                  <IconCardTitle>Books</IconCardTitle>
                </IconCard>
              </ContentCol2>
            </RowNoOutline>

            <RowNoOutline>
              <ContentCol>
                <UncontrolledCollapse toggler="#history" isOpen={toggleStatus['history']}>
                  <LinkCard>
                    <CategoryTitle>The History of Juneteenth</CategoryTitle>
                    <CardBody>
                      <ResourceLink href="https://time.com/4373253/juneteenth-2016/">
                        Why All Americans Should Celebrate Juneteenth
                      </ResourceLink>
                      <br />
                      <br />
                      On Sunday, many Americans will celebrate “Juneteenth,”
                      which marks the end of slavery in America. While some may
                      argue Juneteenth is primarily for the African-American
                      community, there is value for every American—regardless of
                      race, culture or background—to observe this holiday.
                      <hr />
                      <ResourceLink href="https://www.history.com/news/what-is-juneteenth">
                        What Is Juneteenth?
                      </ResourceLink>
                      <br />
                      <br />
                      What Is Juneteenth? Juneteenth commemorates the effective
                      end of slavery in the United States.
                      <hr />
                      <ResourceLink href="https://hbcubuzz.com/2020/06/why-wasnt-juneteenth-taught-in-grade-school/">
                        Why Wasn’t Juneteenth Taught In Grade School?
                      </ResourceLink>
                      <br />
                      <br />
                      A Connecticut fourth grade social studies textbook falsely
                      claimed that slaves were treated just like “family.” A
                      Texas geography textbook referred to enslaved Africans as
                      “workers.” In Alabama, up until the 1970s, fourth graders
                      learned in a textbook called “Know Alabama” that slave
                      life on a plantation was “one of the happiest ways of
                      life.”
                      <hr />
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>

                <UncontrolledCollapse toggler="#flag" isOpen={toggleStatus['flag']}>
                  <LinkCard>
                    <CategoryTitle>The Juneteenth Flag</CategoryTitle>

                    <CardBody>
                      <ResourceLink href="https://parade.com/1219444/alliyahlogan/juneteenth-flag-meaning/">
                        Why is the Juneteenth Flag Blue and Red?
                      </ResourceLink>
                      <br />
                      <br />
                      A Guide to Understanding the Juneteenth Flag
                      <hr />
                      <ResourceLink href="https://www.kmov.com/news/the-juneteenth-flag-is-full-of-symbols-heres-what-they-mean/article_fb3bb689-54fe-52f1-8d60-461d95b1c4b6.html">
                        The Juneteenth flag is full of symbols. Here's what they
                        mean.
                      </ResourceLink>
                      <br />
                      <br />
                      You might see another red, white and blue flag flying over
                      state capitols and city buildings on June 19.
                      <hr />
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>

                <UncontrolledCollapse toggler="#food" isOpen={toggleStatus['food']}>
                  <LinkCard>
                    <CategoryTitle>
                      Juneteenth Food, Drink, &amp; Recipes
                    </CategoryTitle>
                    <CardBody>
                      <ResourceLink href="https://www.atlasobscura.com/articles/what-is-juneteenth">
                        How Red Food and Drink Joined the Juneteenth Feast
                      </ResourceLink>
                      <br />
                      <br />
                      The story behind red snacks and beverages at Black
                      American June 19 celebrations dates back to well before
                      slavery.
                      <hr />
                      <ResourceLink href="https://www.hitc.com/en-gb/2020/06/19/juneteenth-why-do-people-drink-strawberry-soda-find-a-recipe-here/">
                        JUNETEENTH: WHY DO PEOPLE DRINK STRAWBERRY SODA? FIND A
                        RECIPE HERE!
                      </ResourceLink>
                      <br />
                      <br />
                      Juneteenth is well known to be celebrated by drinking red
                      strawberry soda – but why?
                      <hr />
                      <ResourceLink href="https://divascancook.com/category/juneteenth-food/">
                        Juneteenth Recipes
                      </ResourceLink>
                      <br />
                      <br />
                      An array of Southern Recipes that anyone can make. "From
                      Divas Can Cook", Monique has put together an array of
                      Juneteenth recipes so you can kick off your holiday right!
                      <hr />
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>

                <UncontrolledCollapse toggler="#events" isOpen={toggleStatus['events']}>
                  <LinkCard>
                    <CategoryTitle>
                      Juneteenth Local &amp; National Events
                    </CategoryTitle>

                    <CardBody>
                      <ResourceLink href="https://www.weouthereseattle.com/2021-calendar/it-takes-a-village-juneteenth-festival/2021/6/19/it-takes-a-village-juneteenth-festival">
                        It Takes a Village — Juneteenth Festival — We Out Here
                        2021
                      </ResourceLink>
                      <br />
                      <br />
                      Juneteenth by It Takes a Village creates a unique, annual
                      event space to celebrate the Black community and learn
                      about the Black experience while sharing in the diversity
                      of culture that makes up our neighborhoods, connecting
                      people to services and resources they need to live their
                      best lives while
                      <hr />
                      <ResourceLink href="https://visitseattle.org/events/1619-resistance-resilience-remembrance/">
                        1619: Resistance - Resilience - Remembrance | Visit
                        Seattle
                      </ResourceLink>
                      <br />
                      <br />
                      Official Event information from VisitSeattle.org here,
                      1619: Resistance - Resilience - Remembrance.
                      <hr />
                      <ResourceLink href="https://southseattleemerald.com/2021/06/10/juneteenth-2021-in-seattle-a-guide-to-local-events/">
                        Juneteenth 2021 in Seattle: A Guide: object Local Events
                      </ResourceLink>
                      <br />
                      <br />
                      Emerald staff rounded up local Juneteenth events so you
                      and yours can easily find ways to participate both in
                      person and virtually in celebrations, storytimes, cooking
                      classes, and so much more!
                      <hr />
                      <ResourceLink href="https://www.capitolhillseattle.com/2021/06/juneteenth-2021-in-the-central-district-jacksons-catfish-corner-grand-opening-freedom-march-northwest-african-american-museum-jubilee/">
                        Juneteenth 2021 in the Central District: Jackson’s
                        Catfish Corner Grand Opening.
                      </ResourceLink>
                      <br />
                      <br />
                      Freedom March, Northwest African American Museum Jubilee
                      <hr />
                      <ResourceLink href="https://www.essence.com/culture/juneteenth-events-happening-across-the-country/">
                        31 Juneteenth Events Happening Across The Country
                      </ResourceLink>
                      <br />
                      <br />
                      From block parties and paint n' sips to rallys and
                      networking events, use this guide to celebrate Juneteenth
                      no matter where you are.
                      <hr />
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#books" isOpen={toggleStatus['books']}>
                  <LinkCard>
                    <CategoryTitle>Juneteenth Books</CategoryTitle>

                    <CardBody>
                      <Subcat>Juneteenth Children's Books</Subcat>
                      <ResourceLink href="https://youtu.be/zxms8MtuisY">
                        Juneteenth for Mazie
                      </ResourceLink>
                      <br />
                      <br />
                      Mazie is ready to celebrate liberty. She is ready to
                      celebrate freedom. She is ready to celebrate a great day
                      in American history. The day her ancestors were no longer
                      slaves.
                      <hr />
                      <ResourceLink href="https://www.amazon.com/Juneteenth-Beautiful-Me-Anece-Rochell/dp/1955228000/ref=asc_df_1955228000/?tag=hyprod-20&linkCode=df0&hvadid=521009070880&hvpos=&hvnetw=g&hvrand=12853314061247760500&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9033394&hvtargid=pla-1314926969461&psc=1">
                        Juneteenth (Beautiful Me)
                      </ResourceLink>
                      <br />
                      <br />
                      Daylen (one of the characters from the Beautiful Me
                      Series) is excited and ready to share everything he knows
                      about Juneteenth. Juneteenth is an entertaining picture
                      storybook that explains the origin, customs, and
                      importance of the Juneteenth Holiday, in a fun and
                      interactive way. This book is the fourth installment in
                      the Beautiful Me Series, and just like the other books in
                      this series, Juneteenth ends with a words to know page, to
                      help children build a stronger vocabulary.
                      <hr />
                      <ResourceLink href="https://www.amazon.com/All-Different-Now-Juneteenth-Freedom/dp/068987376X/ref=sr_1_1?dchild=1&keywords=All+Different+Now%3A+Juneteenth%2C+the+First+Day+of+Freedom&qid=1623800864&s=books&sr=1-1">
                        All Different Now: Juneteenth, the First Day of Freedom
                      </ResourceLink>
                      <br />
                      <br />
                      Through the eyes of one little girl, All Different Now
                      tells the story of the first Juneteenth, the day freedom
                      finally came to the last of the slaves in the South. Since
                      then, the observance of June 19 as African American
                      Emancipation Day has spread across the United States and
                      beyond. This stunning picture book includes notes from the
                      author and illustrator, a timeline of important dates, and
                      a glossary of relevant terms.
                      <hr />
                      <ResourceLink href="https://www.amazon.com/Juneteenth-Jamboree-Carole-Boston-Weatherford/dp/1600602487">
                        Juneteenth Jamboree
                      </ResourceLink>
                      <br />
                      <br />
                      Joining her parents in a community celebration of
                      Juneteenth, Cassie learns about the day when slaves in
                      Texas were freed some two years after the Emancipation
                      Proclamation and wonders why the news took so long to
                      reach them.
                      <hr />
                      <ResourceLink href="https://www.amazon.com/Come-Juneteenth-Ann-Rinaldi/dp/0152063927">
                        Come Juneteenth (Great Episodes)
                      </ResourceLink>
                      <br />
                      <br />
                      Sis Goose is a beloved member of Luli's family, despite
                      the fact that she was born a slave. But the family is
                      harboring a terrible secret. And when Union soldiers
                      arrive on their Texas plantation to announce that slaves
                      have been declared free for nearly two years, Sis Goose is
                      horrified to learn that the people she called family have
                      lied to her for so long. She runs away--but her newly
                      found freedom has tragic consequences.
                      <hr />
                      <ResourceLink href="https://www.amazon.com/Juneteenth-Freedom-Muriel-Miller-Branch/dp/0525652221">
                        Juneteenth: Freedom Day
                      </ResourceLink>
                      <br />
                      <br />
                      Provides the story of how this holiday, marking the
                      Emancipation Proclamation, spontaneously began on <br />{" "}
                      June 19, 1865, in Galveston, Texas, and grew from there
                      into a nationwide celebration of freedom among African
                      Americans.
                      <hr />
                      <br />
                      <br />
                      <Subcat>Juneteenth Adult Books</Subcat>
                      <ResourceLink href="https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764">
                        Invisible Man
                      </ResourceLink>
                      <br />
                      <br />
                      Originally published in 1952 as the first novel by a then
                      unknown author, it remained on the bestseller list for
                      sixteen weeks, won the National Book Award for fiction,
                      and established Ralph Ellison as one of the key writers of
                      the century.
                      <br />
                      <br />
                      The book's nameless narrator describes growing up in a
                      black community in the South, attending a Negro college
                      from which he is expelled, moving to New York and becoming
                      the chief spokesman of the Harlem branch of "the
                      Brotherhood", before retreating amid violence and
                      confusion to the basement lair of the Invisible Man he
                      imagines himself to be.
                      <br />
                      <br />
                      The book is a passionate and witty tour de force of style,
                      strongly influenced by T.S. Eliot's The Waste Land, James
                      Joyce, and Dostoevsky.
                      <hr />
                      <ResourceLink href="https://www.amazon.com/Juneteenth-Annette-Gordon-Reed/dp/1631498835">
                        On Juneteenth
                      </ResourceLink>
                      <br />
                      <br />
                      Weaving together American history, dramatic family
                      chronicle, and searing episodes of memoir, Annette
                      Gordon-Reed’s On Juneteenth provides a historian’s view of
                      the country’s long road to Juneteenth, recounting both its
                      origins in Texas and the enormous hardships that
                      African-Americans have endured in the century since, from
                      Reconstruction through Jim Crow and beyond. All too aware
                      of the stories of cowboys, ranchers, and oilmen that have
                      long dominated the lore of the Lone Star State,
                      Gordon-Reed―herself a Texas native and the descendant of
                      enslaved people brought to Texas as early as the
                      1820s―forges a new and profoundly truthful narrative of
                      her home state, with implications for us all.
                      <hr />
                      <ResourceLink href="https://www.amazon.com/Juneteenth-Celebration-Edward-Cotham-Jr/dp/1649670001/ref=sr_1_8?dchild=1&keywords=juneteenth&qid=1623802482&refinements=p_n_feature_nine_browse-bin%3A3291437011&rnid=3291435011&s=books&sr=1-8">
                        Juneteenth: The Story Behind the Celebration
                      </ResourceLink>
                      <br />
                      <br />
                      Juneteenth has been touted as a national day celebrating
                      the end of slavery. Observances from coast to coast have
                      turned this event into part of the national conversation
                      about race, slavery, and how Americans understand,
                      acknowledge, and explain what has been called the national
                      “original sin.”
                      <hr />
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>
              </ContentCol>
            </RowNoOutline>

            <MobileRowNoOutline>
              <MobileText>* click on categories to view list *</MobileText>
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard onClick={toggle} id="mobilehistory">
                  <MobileHistory />
                  <MobileIconCardTitle>History</MobileIconCardTitle>
                </MobileIconCard>
                <MobileCollapse toggler="#mobilehistory">
                  <LinkCard>
                    <MobileCategoryTitle>
                      The History of Juneteenth
                    </MobileCategoryTitle>
                    <MobileCardBody>
                      <ResourceLink href="https://time.com/4373253/juneteenth-2016/">
                        Why All Americans Should Celebrate Juneteenth
                      </ResourceLink>
                      <br />
                      <br />
                      On Sunday, many Americans will celebrate “Juneteenth,”
                      which marks the end of slavery in America. While some may
                      argue Juneteenth is primarily for the African-American
                      community, there is value for every American—regardless of
                      race, culture or background—to observe this holiday.
                      <MobileRule />
                      <ResourceLink href="https://www.history.com/news/what-is-juneteenth">
                        What Is Juneteenth?
                      </ResourceLink>
                      <br />
                      <br />
                      What Is Juneteenth? Juneteenth commemorates the effective
                      end of slavery in the United States.
                      <MobileRule />
                      <ResourceLink href="https://hbcubuzz.com/2020/06/why-wasnt-juneteenth-taught-in-grade-school/">
                        Why Wasn’t Juneteenth Taught In Grade School?
                      </ResourceLink>
                      <br />
                      <br />
                      A Connecticut fourth grade social studies textbook falsely
                      claimed that slaves were treated just like “family.” A
                      Texas geography textbook referred to enslaved Africans as
                      “workers.” In Alabama, up until the 1970s, fourth graders
                      learned in a textbook called “Know Alabama” that slave
                      life on a plantation was “one of the happiest ways of
                      life.”
                      <MobileRule />
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
              {/* Mobile Card End */}
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard id="mobileflag">
                  <MobileFlag />
                  <MobileIconCardTitle>Flag</MobileIconCardTitle>
                </MobileIconCard>
                <MobileCollapse toggler="#mobileflag">
                  <LinkCard>
                    <MobileCategoryTitle>
                      The Juneteenth Flag
                    </MobileCategoryTitle>
                    <MobileCardBody>
                      <ResourceLink href="https://parade.com/1219444/alliyahlogan/juneteenth-flag-meaning/">
                        Why is the Juneteenth Flag Blue and Red?
                      </ResourceLink>
                      <br />
                      <br />
                      A Guide to Understanding the Juneteenth Flag
                      <MobileRule />
                      <ResourceLink href="https://www.kmov.com/news/the-juneteenth-flag-is-full-of-symbols-heres-what-they-mean/article_fb3bb689-54fe-52f1-8d60-461d95b1c4b6.html">
                        The Juneteenth flag is full of symbols. Here's what they
                        mean.
                      </ResourceLink>
                      <br />
                      <br />
                      You might see another red, white and blue flag flying over
                      state capitols and city buildings on June 19.
                      <MobileRule />
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
              {/* Mobile Card End */}
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard id="mobilefood">
                  <MobileFood />
                  <MobileIconCardTitle>Food</MobileIconCardTitle>
                </MobileIconCard>
                <MobileCollapse toggler="#mobilefood">
                  <LinkCard>
                    <MobileCategoryTitle>
                      Juneteenth Food, Drink, &amp; Recipes
                    </MobileCategoryTitle>
                    <MobileCardBody>
                      <ResourceLink href="https://www.atlasobscura.com/articles/what-is-juneteenth">
                        How Red Food and Drink Joined the Juneteenth Feast
                      </ResourceLink>
                      <br />
                      <br />
                      The story behind red snacks and beverages at Black
                      American June 19 celebrations dates back to well before
                      slavery.
                      <MobileRule />
                      <ResourceLink href="https://www.hitc.com/en-gb/2020/06/19/juneteenth-why-do-people-drink-strawberry-soda-find-a-recipe-here/">
                        JUNETEENTH: WHY DO PEOPLE DRINK STRAWBERRY SODA? FIND A
                        RECIPE HERE!
                      </ResourceLink>
                      <br />
                      <br />
                      Juneteenth is well known to be celebrated by drinking red
                      strawberry soda – but why?
                      <MobileRule />
                      <ResourceLink href="https://divascancook.com/category/juneteenth-food/">
                        Juneteenth Recipes
                      </ResourceLink>
                      <br />
                      <br />
                      An array of Southern Recipes that anyone can make. "From
                      Divas Can Cook", Monique has put together an array of
                      Juneteenth recipes so you can kick off your holiday right!
                      <MobileRule />
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
              {/* Mobile Card End */}
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard id="mobileevents">
                  <MobileEvents />
                  <MobileIconCardTitle>Events</MobileIconCardTitle>
                </MobileIconCard>
                <MobileCollapse toggler="#mobileevents">
                  <LinkCard>
                    <MobileCategoryTitle>
                      Juneteenth Local &amp; National Events
                    </MobileCategoryTitle>

                    <MobileCardBody>
                      <ResourceLink href="https://www.weouthereseattle.com/2021-calendar/it-takes-a-village-juneteenth-festival/2021/6/19/it-takes-a-village-juneteenth-festival">
                        It Takes a Village — Juneteenth Festival — We Out Here
                        2021
                      </ResourceLink>
                      <br />
                      <br />
                      Juneteenth by It Takes a Village creates a unique, annual
                      event space to celebrate the Black community and learn
                      about the Black experience while sharing in the diversity
                      of culture that makes up our neighborhoods, connecting
                      people to services and resources they need to live their
                      best lives while
                      <MobileRule />
                      <ResourceLink href="https://visitseattle.org/events/1619-resistance-resilience-remembrance/">
                        1619: Resistance - Resilience - Remembrance | Visit
                        Seattle
                      </ResourceLink>
                      <br />
                      <br />
                      Official Event information from VisitSeattle.org here,
                      1619: Resistance - Resilience - Remembrance.
                      <MobileRule />
                      <ResourceLink href="https://southseattleemerald.com/2021/06/10/juneteenth-2021-in-seattle-a-guide-to-local-events/">
                        Juneteenth 2021 in Seattle: A Guide: object Local Events
                      </ResourceLink>
                      <br />
                      <br />
                      Emerald staff rounded up local Juneteenth events so you
                      and yours can easily find ways to participate both in
                      person and virtually in celebrations, storytimes, cooking
                      classes, and so much more!
                      <MobileRule />
                      <ResourceLink href="https://www.capitolhillseattle.com/2021/06/juneteenth-2021-in-the-central-district-jacksons-catfish-corner-grand-opening-freedom-march-northwest-african-american-museum-jubilee/">
                        Juneteenth 2021 in the Central District: Jackson’s
                        Catfish Corner Grand Opening.
                      </ResourceLink>
                      <br />
                      <br />
                      Freedom March, Northwest African American Museum Jubilee
                      <ResourceLink href="https://www.essence.com/culture/juneteenth-events-happening-across-the-country/">
                        31 Juneteenth Events Happening Across The Country
                      </ResourceLink>
                      <br />
                      <br />
                      From block parties and paint n' sips to rallys and
                      networking events, use this guide to celebrate Juneteenth
                      no matter where you are.
                      <MobileRule />
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
              {/* Mobile Card End */}
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard id="mobilebooks">
                  <MobileBooks />
                  <MobileIconCardTitle>Books</MobileIconCardTitle>
                </MobileIconCard>
                <MobileCollapse toggler="#mobilebooks">
                  <LinkCard>
                    <MobileCategoryTitle>Juneteenth Books</MobileCategoryTitle>

                    <MobileCardBody>
                      <Subcat>Juneteenth Children's Books</Subcat>
                      <ResourceLink href="https://youtu.be/zxms8MtuisY">
                        Juneteenth for Mazie
                      </ResourceLink>
                      <br />
                      <br />
                      Mazie is ready to celebrate liberty. She is ready to
                      celebrate freedom. She is ready to celebrate a great day
                      in American history. The day her ancestors were no longer
                      slaves.
                      <MobileRule />
                      <ResourceLink href="https://www.amazon.com/Juneteenth-Beautiful-Me-Anece-Rochell/dp/1955228000/ref=asc_df_1955228000/?tag=hyprod-20&linkCode=df0&hvadid=521009070880&hvpos=&hvnetw=g&hvrand=12853314061247760500&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9033394&hvtargid=pla-1314926969461&psc=1">
                        Juneteenth (Beautiful Me)
                      </ResourceLink>
                      <br />
                      <br />
                      Daylen (one of the characters from the Beautiful Me
                      Series) is excited and ready to share everything he knows
                      about Juneteenth. Juneteenth is an entertaining picture
                      storybook that explains the origin, customs, and
                      importance of the Juneteenth Holiday, in a fun and
                      interactive way. This book is the fourth installment in
                      the Beautiful Me Series, and just like the other books in
                      this series, Juneteenth ends with a words to know page, to
                      help children build a stronger vocabulary.
                      <MobileRule />
                      <ResourceLink href="https://www.amazon.com/All-Different-Now-Juneteenth-Freedom/dp/068987376X/ref=sr_1_1?dchild=1&keywords=All+Different+Now%3A+Juneteenth%2C+the+First+Day+of+Freedom&qid=1623800864&s=books&sr=1-1">
                        All Different Now: Juneteenth, the First Day of Freedom
                      </ResourceLink>
                      <br />
                      <br />
                      Through the eyes of one little girl, All Different Now
                      tells the story of the first Juneteenth, the day freedom
                      finally came to the last of the slaves in the South. Since
                      then, the observance of June 19 as African American
                      Emancipation Day has spread across the United States and
                      beyond. This stunning picture book includes notes from the
                      author and illustrator, a timeline of important dates, and
                      a glossary of relevant terms.
                      <hr />
                      <ResourceLink href="https://www.amazon.com/Juneteenth-Jamboree-Carole-Boston-Weatherford/dp/1600602487">
                        Juneteenth Jamboree
                      </ResourceLink>
                      <br />
                      <br />
                      Joining her parents in a community celebration of
                      Juneteenth, Cassie learns about the day when slaves in
                      Texas were freed some two years after the Emancipation
                      Proclamation and wonders why the news took so long to
                      reach them.
                      <MobileRule />
                      <ResourceLink href="https://www.amazon.com/Come-Juneteenth-Ann-Rinaldi/dp/0152063927">
                        Come Juneteenth (Great Episodes)
                      </ResourceLink>
                      <br />
                      <br />
                      Sis Goose is a beloved member of Luli's family, despite
                      the fact that she was born a slave. But the family is
                      harboring a terrible secret. And when Union soldiers
                      arrive on their Texas plantation to announce that slaves
                      have been declared free for nearly two years, Sis Goose is
                      horrified to learn that the people she called family have
                      lied to her for so long. She runs away--but her newly
                      found freedom has tragic consequences.
                      <MobileRule />
                      <ResourceLink href="https://www.amazon.com/Juneteenth-Freedom-Muriel-Miller-Branch/dp/0525652221">
                        Juneteenth: Freedom Day
                      </ResourceLink>
                      <br />
                      <br />
                      Provides the story of how this holiday, marking the
                      Emancipation Proclamation, spontaneously began on <br />{" "}
                      June 19, 1865, in Galveston, Texas, and grew from there
                      into a nationwide celebration of freedom among African
                      Americans.
                      <MobileRule />
                      <br />
                      <br />
                      <Subcat>Juneteenth Adult Books</Subcat>
                      <ResourceLink href="https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764">
                        Invisible Man
                      </ResourceLink>
                      <br />
                      <br />
                      Originally published in 1952 as the first novel by a then
                      unknown author, it remained on the bestseller list for
                      sixteen weeks, won the National Book Award for fiction,
                      and established Ralph Ellison as one of the key writers of
                      the century.
                      <br />
                      <br />
                      The book's nameless narrator describes growing up in a
                      black community in the South, attending a Negro college
                      from which he is expelled, moving to New York and becoming
                      the chief spokesman of the Harlem branch of "the
                      Brotherhood", before retreating amid violence and
                      confusion to the basement lair of the Invisible Man he
                      imagines himself to be.
                      <br />
                      <br />
                      The book is a passionate and witty tour de force of style,
                      strongly influenced by T.S. Eliot's The Waste Land, James
                      Joyce, and Dostoevsky.
                      <MobileRule />
                      <ResourceLink href="https://www.amazon.com/Juneteenth-Annette-Gordon-Reed/dp/1631498835">
                        On Juneteenth
                      </ResourceLink>
                      <br />
                      <br />
                      Weaving together American history, dramatic family
                      chronicle, and searing episodes of memoir, Annette
                      Gordon-Reed’s On Juneteenth provides a historian’s view of
                      the country’s long road to Juneteenth, recounting both its
                      origins in Texas and the enormous hardships that
                      African-Americans have endured in the century since, from
                      Reconstruction through Jim Crow and beyond. All too aware
                      of the stories of cowboys, ranchers, and oilmen that have
                      long dominated the lore of the Lone Star State,
                      Gordon-Reed―herself a Texas native and the descendant of
                      enslaved people brought to Texas as early as the
                      1820s―forges a new and profoundly truthful narrative of
                      her home state, with implications for us all.
                      <MobileRule />
                      <ResourceLink href="https://www.amazon.com/Juneteenth-Celebration-Edward-Cotham-Jr/dp/1649670001/ref=sr_1_8?dchild=1&keywords=juneteenth&qid=1623802482&refinements=p_n_feature_nine_browse-bin%3A3291437011&rnid=3291435011&s=books&sr=1-8">
                        Juneteenth: The Story Behind the Celebration
                      </ResourceLink>
                      <br />
                      <br />
                      Juneteenth has been touted as a national day celebrating
                      the end of slavery. Observances from coast to coast have
                      turned this event into part of the national conversation
                      about race, slavery, and how Americans understand,
                      acknowledge, and explain what has been called the national
                      “original sin.”
                      <MobileRule />
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
              {/* Mobile Card End */}
            </MobileRowNoOutline>
          </RowOutline>
        </ContentContainer>
      </MainContainer>
    </Page>
  );
}

export default Juneteenth;
