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
  Warning,
  LawEnforcement,
  Family,
  Experience,
  DandI,
  Page,
  LinkCard,
  ResourceLink,
  AntiRacist,
  EducationResources,
  MobileText,
  MobileCategoryTitle,
  MobileCollapse,
  MobileContentCol2,
  MobileEducationResources,
  MobileIconCard,
  MobileIconCardTitle,
  MobileRowNoOutline,
  MobileLawEnforcement,
  MobileMovies,
  MobileVarious,
  MobileDandI,
  MobileFamily,
  MobileAntiRacist,
  MobileBooks,
  MobileCardBody,
  Books,
  Movies,
  Various,
  IconCardTitle,
  IconCard,
} from "../styles/rr_styles";

function Resources_Research() {
  const [toggleStatus, setToggleStatus] = useState({"huemanistic": false, "education": false, "diversity": false, "experience": false, "law": false, "antiracist": false, "books": false, "various": false, "movies": false});

  const toggle = (section) => {
    let newState = {}
    for(let s of ["huemanistic", "education", "diversity", "experience", "books", "antiracist", "movies", "various", "law"]) {
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
        {/* <HeaderImg /> */}
        <ContentContainer>
          <TitleRow>
            <PageTitle>Resources &amp; Research</PageTitle>
          </TitleRow>
          <RowNoOutline>
            <ContentCol>
              <Italics>
                Our HUEmanistic team has compiled a list of amazing resources to
                continue your research into racial inequality, current events,
                educational material and much more. Click a category to learn
                more...
              </Italics>
            </ContentCol>
          </RowNoOutline>
          <RowOutline>
            <RowNoOutline>
              <ContentCol2>
                <IconCard id="huemanistic" onClick={() => toggle('huemanistic')}>
                  <Family />
                  <IconCardTitle>HUEmanistic Suggests...</IconCardTitle>
                </IconCard>
              </ContentCol2>
              <ContentCol2>
                <IconCard onClick={() => toggle('education')} id="education">
                  <EducationResources />
                  <IconCardTitle>Educational Resources</IconCardTitle>
                </IconCard>
              </ContentCol2>
              <ContentCol2>
                <IconCard id="diversity" onClick={() => toggle('diversity')}>
                  <DandI />
                  <IconCardTitle>Inclusion &amp; Diversity</IconCardTitle>
                </IconCard>
              </ContentCol2>
              <ContentCol2>
                <IconCard id="experience" onClick={() => toggle('experience')}>
                  <Experience />
                  <IconCardTitle>The Black Experience</IconCardTitle>
                </IconCard>
              </ContentCol2>
              <ContentCol2>
                <IconCard id="law" onClick={() => toggle('law')}> 
                  <LawEnforcement />
                  <IconCardTitle>Law Enforcement</IconCardTitle>
                </IconCard>
              </ContentCol2>
            </RowNoOutline>
            <RowNoOutline>
              <ContentCol2>
                <IconCard id="antiracist" onClick={() => toggle('antiracist')}>
                  <AntiRacist />
                  <IconCardTitle>Becoming AntiRacist</IconCardTitle>
                </IconCard>
              </ContentCol2>
              <ContentCol2>
                <IconCard id="books" onClick={() => toggle('books')}>
                  <Books />
                  <IconCardTitle>Books</IconCardTitle>
                </IconCard>
              </ContentCol2>
              <ContentCol2>
                <IconCard id="movies" onClick={() => toggle('movies')}>
                  <Movies />
                  <IconCardTitle>Movies</IconCardTitle>
                </IconCard>
              </ContentCol2>
              <ContentCol2>
                <IconCard id="various" onClick={() => toggle('various')}>
                  <Various />
                  <IconCardTitle>More Resources</IconCardTitle>
                </IconCard>
              </ContentCol2>
            </RowNoOutline>

            <RowNoOutline>
              <ContentCol>
                <UncontrolledCollapse toggler="#education" isOpen={toggleStatus['education']}>
                  <LinkCard>
                    <CategoryTitle>Educational Resources</CategoryTitle>
                    <CardBody>
                      <ResourceLink href="https://www.pbs.org/education/blog/a-call-to-action-for-white-educators-who-seek-to-be-anti-racist?twclid=11368952382646710275">
                        A Call to Action for White Educators Who Seek to Be
                        Anti-Racist
                      </ResourceLink>
                      <br />
                      <br />
                      This is not a time to be dismissive, but instead it’s time
                      for us to reach out, support in every way possible and
                      take meaningful action.
                      <hr />
                      <ResourceLink href="https://www.zinnedproject.org/about/">
                        The Zinn Ed Project
                      </ResourceLink>
                      <br />
                      <br />
                      Advocating for the correct history to be taught
                      <hr />
                      <ResourceLink href="https://tryingtogether.org/community-resources/anti-racism-tools/">
                        Trying Together
                      </ResourceLink>
                      <br />
                      <br />
                      Anti-Racism Tools
                      <hr />
                      <ResourceLink href="https://drive.google.com/file/d/1FvRQqu-TKS6jP7B5V_FUhTiAQ-7VxxHb/view?mc_cid=968a82c851&mc_eid=767f8a0684">
                        TEDx Seattle Salon Resource Guide March 2021
                      </ResourceLink>
                      <br />
                      <br />
                      Moving Race Conversations Forward
                      <hr />
                      <ResourceLink href="https://www.pbs.org/video/jim-crow-of-the-north-stijws/">
                        Minnesota Experience - Jim Crow of the North
                      </ResourceLink>
                      <br />
                      <br />
                      Why does Minnesota suffer through some of the worst racial
                      disparities in the nation?
                      <hr />
                      <ResourceLink href="https://depts.washington.edu/civilr/kkk_seattle.htm?fbclid=IwAR2kgulzKzEcHzmBBIaTRiL8JumFs7ynLgIht-ulPrsitNRrdjDibMZCY_s">
                        History of KKK in Seattle
                      </ResourceLink>
                      <br />
                      <br />
                      The Civil Rights and Labor History Consortium
                      <hr />
                      <ResourceLink href="https://www.unthsc.edu/students/wp-content/uploads/sites/26/Addressing-Framework-and-Overview.pdf">
                        Framework for understanding privilege
                      </ResourceLink>
                      <br />
                      <br />
                      UNT Health Science Center
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>

                <UncontrolledCollapse toggler="#huemanistic" isOpen={toggleStatus['huemanistic']}>
                  <LinkCard>
                    <CategoryTitle>HUEmanistic Suggests...</CategoryTitle>

                    <CardBody>
                      <Subcat>Books</Subcat>
                      <br />
                      <ResourceLink href="https://www.amazon.com/How-Be-Antiracist-Ibram-Kendi/dp/0525509283">
                        How to Be an Antiracist
                      </ResourceLink>
                      <br />
                      <br />
                      written by: Ibram X. Kendi
                      <hr />
                      <ResourceLink href="https://www.amazon.com/Body-Not-Apology-Second-Self-Love/dp/1523090995/ref=msx_wsirn_v1_1?pd_rd_w=JrgeW&pf_rd_p=ad02864c-dd1c-47aa-98b9-1e72a1084f6a&pf_rd_r=R3HC78HFKQ65281E43TY&pd_rd_r=84b64b3e-931e-4bde-ab8b-cf0562a44e40&pd_rd_wg=2pcEL&pd_rd_i=1523090995&psc=1">
                        The Body is Not an Apology
                      </ResourceLink>
                      <br />
                      <br />
                      written by: Sonya Renee Taylor
                      <hr />
                      <ResourceLink href="https://www.amazon.com/Uncomfortable-Conversations-Black-Man/dp/B08BG5QLW5/ref=tmm_aud_swatch_0?_encoding=UTF8&qid=1612030847&sr=1-8-catcorr">
                        Uncomfortable Conversations with a Black Man
                      </ResourceLink>
                      <br />
                      <br />
                      written by: Emmanuel Acho
                      <br />
                      <br />
                      <ResourceLink href="https://www.youtube.com/channel/UC3DoYiL7X_N1Ta1o4HE9Mlg">
                        Emmanuel Acho's YouTube Channel
                        <hr />
                      </ResourceLink>
                      <ResourceLink href="https://smile.amazon.com/dp/1580058825/ref=cm_sw_r_oth_api_glt_fabc_F7WQB12X6R3RAZG34GDK">
                        So You Want to Talk About Race
                      </ResourceLink>
                      <br />
                      <br />
                      written by: Ijeoma Oluo
                      <hr />
                      <ResourceLink href="https://www.amazon.com/Fearing-Black-Body-Racial-Origins/dp/1479886750/ref=sr_1_1?dchild=1&keywords=fearing+the+black+body&qid=1621035484&sr=8-1">
                        Fearing the Black Body: The Racial Origins of Fat Phobia
                      </ResourceLink>
                      <br />
                      <br />
                      written by: Sabrina Strings
                      <hr />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Subcat>Children's Books</Subcat>
                      <br />
                      <ResourceLink href="https://smile.amazon.com/All-Are-Welcome-Alexandra-Penfold/dp/0525579648/ref=sr_1_1?dchild=1&keywords=all+are+welcome&qid=1621012266&s=books&sr=1-1">
                        All are welcome
                      </ResourceLink>
                      <br />
                      <br />
                      written by: Alexandra Penfold
                      <hr />
                      <ResourceLink href="https://smile.amazon.com/Antiracist-Baby-Picture-Ibram-Kendi/dp/0593110501/ref=sr_1_2?dchild=1&keywords=anti+racist+baby&qid=1621012323&s=books&sr=1-2">
                        Antiracist Baby Picture Book
                      </ResourceLink>
                      <br />
                      <br />
                      written by: Ibram X. Kendi
                      <hr />
                      <ResourceLink href="https://www.amazon.com/Oldest-Student-Mary-Walker-Learned/dp/1524768286/ref=sr_1_1?crid=3IC61DMIN9533&dchild=1&keywords=the+oldest+student&qid=1613240164&sprefix=the+old%2Caps%2C241&sr=8-1">
                        The Oldest Student
                      </ResourceLink>
                      <br />
                      <br />
                      written by: Rita Lorraine Hubbard
                      <hr />
                      <ResourceLink href="https://smile.amazon.com/Kids-Book-About-Racism-ebook/dp/B088GYYHJX/ref=sr_1_1?crid=30NBJVT98Y9FE&dchild=1&keywords=a+kids+book+about+racism&qid=1621012398&s=books&sprefix=a+kids+book+abotu+%2Cstripbooks%2C244&sr=1-1">
                        A Kids Book About Racism
                      </ResourceLink>
                      <br />
                      <br />
                      written by: Jelani Memory
                      <hr />
                      <ResourceLink href="https://smile.amazon.com/dp/1534425365/ref=cm_sw_r_oth_api_glt_fabc_6C8R2R9D1H5E5XGV8VYX">
                        Sulwe
                      </ResourceLink>
                      <br />
                      <br />
                      written by: Lupita Nyong'o
                      <hr />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Subcat>Podcasts</Subcat>
                      <br />
                      <ResourceLink href="https://www.audible.com/pd/modern-racism-Podcast/B08KYX699X">
                        Modern Racism
                      </ResourceLink>
                      <br />
                      <br />
                      I am a Sociology Professor creating a documentary film
                      entitled "Modern Racism.
                      <hr />
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>

                <UncontrolledCollapse toggler="#diversity" isOpen={toggleStatus['diversity']}>
                  <LinkCard>
                    <CategoryTitle>Inclusion &amp; Diversity</CategoryTitle>
                    <CardBody>
                      <ResourceLink href="https://www.gallup.com/workplace/247862/analytics-based-hiring-improved-bank-performance-diversity.aspx">
                        Improving Diversity
                      </ResourceLink>
                      <br />
                      <br />
                      US Bank
                      <hr />
                      <ResourceLink href="https://www.bloomberg.com/news/features/2020-02-28/the-great-tulsa-remote-worker-experiment">
                        The Great Tulsa Remote Worker Experiment
                      </ResourceLink>
                      <br />
                      <br />
                      The first class of hand-picked remote workers moved to
                      Tulsa, Oklahoma, in exchange for $10,000 and a built-in
                      community.
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>

                <UncontrolledCollapse toggler="#experience" isOpen={toggleStatus['experience']}>
                  <LinkCard>
                    <CategoryTitle>The Black Experience</CategoryTitle>

                    <CardBody>
                      <ResourceLink href="https://youtu.be/w1vuhrFfEkE">
                        The White Savior Trope Explained
                      </ResourceLink>
                      <br />
                      <br />
                      How did this trope become so persistent? Here’s our Take
                      on the dangers of the White Savior, and how we can change
                      our own narratives and conversations to become more
                      anti-racist ourselves.
                      <hr />
                      <ResourceLink href="https://youtu.be/rSjs_pm8MZk">
                        The Strong Black Woman Trop Explained
                      </ResourceLink>
                      <br />
                      <br />
                      The Strong Black Woman has been standing tall for many
                      decades. She’s unbreakable, resilient, almost superhuman.
                      So what’s the problem with this seemingly empowering
                      depiction of black women?
                      <hr />
                      <ResourceLink href="https://www.eater.com/22291510/black-farmers-fighting-for-farmland-discrimination-in-agriculture">
                        Black-Owned Farms Are Holding on by a Thread
                      </ResourceLink>
                      <br />
                      <br />
                      Racial discrimination has long contributed to the steady
                      decline of Black-owned farms in America, but a movement to
                      grow those numbers may soon be bolstered by real support.
                      <hr />
                      <ResourceLink href="https://www.ewg.org/research/black-farmer-usda-timeline/">
                        Timeline: Black Farmers and the USDA, 1920 to Present
                      </ResourceLink>
                      <br />
                      <br />
                      The U.S. Department of Agriculture has a long history of
                      discrimination against Black farmers.
                      <hr />
                      <ResourceLink href="https://www.theatlantic.com/magazine/archive/2014/06/the-case-for-reparations/361631/">
                        The Case for Reparations
                      </ResourceLink>
                      <br />
                      <br />
                      The majority of the people in the state were perpetually
                      robbed of the vote—
                      <hr />
                      <ResourceLink href="https://www.washingtonpost.com/nation/2019/08/26/kazeem-oyeneyin-raleigh-police-video/">
                        ‘I thought he was going to kill me’
                      </ResourceLink>
                      <br />
                      <br />A black man was handcuffed by police in his house
                      over false alarm
                      <hr />
                      <ResourceLink href="https://www.cbsnews.com/news/fat-shaming-race-weight-body-image-cbsn-originals/">
                        Fat Phobia And Its Racist Past And Present: Shortwave
                      </ResourceLink>
                      <br />
                      <br />
                      NPR
                      <hr />
                      <ResourceLink href="https://www.cbsnews.com/news/fat-shaming-race-weight-body-image-cbsn-originals/">
                        Speaking Frankly | Fat Shaming
                      </ResourceLink>
                      <br />
                      <br />
                      The racial origins of fat stigma
                      <hr />
                      <ResourceLink href="https://www.intheknow.com/post/unpacking-the-racist-roots-of-fat-phobia-and-diet-culture/">
                        UNPACKING THE RACIST ROOTS OF FAT PHOBIA AND DIET
                        CULTURE
                      </ResourceLink>
                      <br />
                      <br />
                      When it comes to diet culture, not all bodies — and races
                      — are treated equally.
                      <hr />
                      <ResourceLink href="https://www.theguardian.com/us-news/2021/apr/17/bruces-beach-willa-charles-manhattan-beach-la-county">
                        The Guardian
                      </ResourceLink>
                      <br />
                      <br />
                      A beach town seized a Black couple’s land in the 1920s.
                      Now their family could get it back.
                      <hr />
                      <ResourceLink href="https://youtu.be/GC5EMHDpZlE">
                        Anyssa Bohanan | TEDxBend
                      </ResourceLink>
                      <br />
                      <br />
                      Black In Bend: Being An Extreme Minority In Suburbia
                      <hr />
                      <ResourceLink href="https://youtu.be/u4dc1axRwE4">
                        Jamila Lyiscott | TEDxTheBenjaminSchool
                      </ResourceLink>
                      <br />
                      <br />
                      Why English Class is Silencing Students of Color
                      <hr />
                      <ResourceLink href="https://youtu.be/N6FWZ-TpkFI">
                        The unrealistic toxic beauty standards is deadly.
                      </ResourceLink>
                      <br />
                      <br />
                      The universal beauty standard goes back to internalized
                      racism, ideologies, and colorism due to the colonization
                      of the western world.
                      <br />
                      <br />
                      <Warning>*NSFW: Language</Warning>
                      <hr />
                      <ResourceLink href="https://youtu.be/KNc4wLZTg2c">
                        The Daily Show
                      </ResourceLink>
                      <br />
                      <br />
                      If You Don’t Know, Now You Know: Mental Health Stigma in
                      the Black Community.
                      <hr />
                      <ResourceLink href="https://youtu.be/OLQzz75yE5A">
                        Mena Fombo | TEDxBristol
                      </ResourceLink>
                      <br />
                      <br />
                      No. You Cannot Touch My Hair!
                      <hr />
                      <ResourceLink href="https://youtu.be/tzw96xzUVRk">
                        Nappy Roots
                      </ResourceLink>
                      <br />
                      <br />
                      Hidden Camera: Public Reactions to Afro Hair | Natural
                      Hair Documentary
                      <hr />
                      <ResourceLink href="https://youtu.be/sAXisi1Mpt0">
                        NowThisNews
                      </ResourceLink>
                      <br />
                      <br />
                      App Fights Black Maternal Mortality With Hospital Reviews
                      <hr />
                      <ResourceLink href="https://youtu.be/TtjOZI_wQOE">
                        CNN
                      </ResourceLink>
                      <br />
                      <br />
                      He tweeted hate at her. She sued. Then she met him
                      <hr />
                      <ResourceLink href="https://youtu.be/w6IEvk5tflo">
                        NowThis
                      </ResourceLink>
                      <br />
                      <br />
                      Police Tackle Black Mom & Son After Accusing Them of
                      Stealing
                      <hr />
                      <ResourceLink href="https://youtu.be/b3UtNGQa7UA">
                        The Beat With Ari Melber
                      </ResourceLink>
                      <br />
                      <br />
                      Reform: Officers Who Detained 6-Year-Old At Gunpoint Sued
                      Under New Law
                      <hr />
                      <ResourceLink href="https://youtu.be/Xr1Qv9_YXEM">
                        As/Is
                      </ResourceLink>
                      <br />
                      <br />
                      Black Women’s Hair Throughout History
                      <hr />
                      <ResourceLink href="https://youtu.be/QNLI2jZRJa8">
                        NowThis
                      </ResourceLink>
                      <br />
                      <br />
                      Activist Teaches School Board About Their Racism And
                      Confederate History
                      <hr />
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>

                <UncontrolledCollapse toggler="#law" isOpen={toggleStatus['law']}>
                  <LinkCard>
                    <CategoryTitle>Law Enforcement</CategoryTitle>

                    <CardBody>
                      <ResourceLink href="https://www.aclu.org/press-releases/aclu-analysis-reveals-reforms-controversial-1033-program-gives-police-weapons-war-had">
                        ACLU ANALYSIS REVEALS REFORMS TO CONTROVERSIAL 1033
                        PROGRAM THAT GIVES POLICE WEAPONS OF WAR HAD NO IMPACT
                      </ResourceLink>
                      <br />
                      <br />
                      Today, the American Civil Liberties Union released an
                      analysis of 1033, the federal program through which the
                      U.S. military transfers weapons of war to state and local
                      police and sheriff’s departments.
                      <hr />
                      <ResourceLink href="https://level.medium.com/abolition-for-the-people-397ef29e3ca5">
                        Abolition for the People
                      </ResourceLink>
                      <br />
                      <br />
                      The Movement for a Future Without Policing & Prisons
                      <hr />
                      <ResourceLink href="https://mappingpoliceviolence.org/">
                        Mapping Police Violence
                      </ResourceLink>
                      <br />
                      <br />A research collaborative collecting comprehensive
                      data on police killings nationwide to quantify the impact
                      of police violence in communities.
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>

                <UncontrolledCollapse toggler="#antiracist" isOpen={toggleStatus['antiracist']}>
                  <LinkCard>
                    <CategoryTitle>Becoming Anti-Racist</CategoryTitle>

                    <CardBody>
                      <ResourceLink href="https://www.youtube.com/watch?v=OTeMtrv7p-8 ">
                        Inspiring Activism
                      </ResourceLink>
                      <br />
                      <br />
                      Interview with Jane Elliot
                      <hr />
                      <ResourceLink href="https://www.youtube.com/watch?v=SwiKhwSH1V0">
                        King Keraun - I watched a white women record my whole
                        traffic stop 
                      </ResourceLink>
                      <br />
                      <br />
                      A stranger becomes an Ally
                      <hr />
                      <ResourceLink href="https://www.nytimes.com/2020/11/19/style/loretta-ross-smith-college-cancel-culture.html?mc=aud_dev&ad-keywords=auddevgate&subid1=TAFI&ad_name=INTER_20_XXXX_XXX_1P_CD_XX_XX_SITEVISITXREM_X_XXXX_COUSA_P_X_X_EN_FBIG_OA_XXXX_00_EN_JP_NFLINKS&adset_name=https%3A%2F%2Fwww.nytimes.com%2F2020%2F11%2F19%2Fstyle%2Floretta-ross-smith-college-cancel-culture.html&campaign_id=23846797028050063&fbclid=IwAR3oWGSj3AjnWhqs2d3RDQsFyqU4GEkQjkni3seBeL66GPCZsbjBz3TnXHM">
                        What if Instead of Calling People Out, We Called Them
                        In?
                      </ResourceLink>
                      <br />
                      <br />
                      Prof. Loretta J. Ross is combating cancel culture with a
                      popular class at Smith College.
                      <hr />
                      <ResourceLink href="https://youtu.be/Y9lEvaXodNc">
                        Racial progression in our generation
                      </ResourceLink>
                      <br />
                      <br />
                      The talk is about my personal journey with the word as
                      part of my vocabulary and psyche from a young age. It also
                      includes how the word has morphed over time from a
                      pejorative to a term of endearment to being eradicated
                      from my vocabulary entirely.
                      <hr />
                      <ResourceLink href="https://youtu.be/6MYHBrJIIFU">
                        How Racist Are You?
                      </ResourceLink>
                      <br />
                      <br />
                      The Event: with Jane Elliott
                      <hr />
                      <ResourceLink href="https://youtu.be/rR5zDIjUrfk">
                        Michael Welp | TEDxBend
                      </ResourceLink>
                      <br />
                      <br />
                      White Men: Time to Discover Your Cultural Blind Spots
                      <hr />
                      <ResourceLink href="https://youtu.be/1DxHL2i3cZo">
                        Michael Smith | TEDxJacksonville
                      </ResourceLink>
                      <br />
                      <br />
                      Black murder is normal
                      <hr />
                      <ResourceLink href="https://www.cnn.com/interactive/2020/us/racism-questions-answers/">
                        Your big questions about race, answered.
                      </ResourceLink>
                      <br />
                      <br />
                      Ever since the recent Black Lives Matter protests, leaders
                      have called for a national conversation on race. So here’s
                      a start.
                      <hr />
                      <ResourceLink href="https://www.ted.com/talks/dexter_dias_racism_thrives_on_silence_speak_up/up-next?fbclid=IwAR1jQHuPd4KYlTc0C9RAQxBdU0Xh6bYnsUq3KYmOaeEsl8Yztef0-KbVvqw">
                        Dexter Dias
                      </ResourceLink>
                      <br />
                      <br />
                      Racism thrives on silence -- speak up!
                      <hr />
                      <ResourceLink href="https://mailchi.mp/rachelcargle/dothework-course-all-30days">
                        Anti-Racist Course
                      </ResourceLink>
                      <br />
                      <br />
                      A 30 Day course on helping you become anti-racist.
                      <hr />
                      <ResourceLink href="https://toofab.com/2020/06/04/dave-chappelle-incredible-heckler-racism-story/">
                        Dave Chapelle gets Heckled
                      </ResourceLink>
                      <br />
                      <br />
                      educates a heckler on police violence - forever changing
                      her perception.
                      <hr />
                      <ResourceLink href="https://implicit.harvard.edu/implicit/takeatest.html">
                        Bias Test
                      </ResourceLink>
                      <br />
                      <br />
                      Curious about your own bias? Take a test at the following
                      link.
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>

                <UncontrolledCollapse toggler="#books" isOpen={toggleStatus['books']}> 
                  <LinkCard>
                    <CategoryTitle>Books</CategoryTitle>

                    <CardBody>
                      <ResourceLink href="https://www.spl.org/books-and-media/books-and-ebooks/staff-picks/a-toolkit-for-anti-racism-allies">
                        A Toolkit for Anti-racism Allies
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.seattletimes.com/entertainment/books/must-read-books-to-learn-more-about-black-history-racism-and-social-justice/">
                        Check out more than 20 must-read books to learn more
                        about Black history, racism and social justice
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://seattle.bibliocommons.com/list/share/73000360/1423892517">
                        22 books on race and white privilege that will show you
                        what's really happening in America right now
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.businessinsider.com/books-white-privilege-novels-racism-antiracism-black-scholars-2020-6">
                        Ibram X. Kendi Antiracist Reading List
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.bookpeople.com/anti-racist-reading-list">
                        An Anti-Racist Reading List
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://time.com/5846732/books-to-read-about-anti-racism/">
                        Several Antiracist Books Are Selling Out. Here's What
                        Else Black Booksellers and Publishers Say You Should
                        Read
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.penguinrandomhouse.com/articles/anti-racist-books-and-resources">
                        Anti-Racist Books and Resources for Our Readers
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.thegoodtrade.com/features/books-on-race">
                        Make These 22 Books Part Of Your Anti-Racism Education
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://nymag.com/strategist/article/anti-racist-reading-list.html">
                        Anti-Racist Books Recommended by Educators and Activists
                      </ResourceLink>
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>

                <UncontrolledCollapse toggler="#movies" isOpen={toggleStatus['movies']}> 
                  <LinkCard>
                    <CategoryTitle>Movies</CategoryTitle>
                    <CardBody>
                      <ResourceLink href="https://time.com/5847912/movies-to-watch-about-racism-protests/">
                        12 Movies to Watch to Educate Yourself About Racism and
                        Protest History, Recommended by Experts
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.oprahmag.com/entertainment/g32744961/movies-about-race-racism/">
                        18 Movies and Documentaries That Confront Race in
                        America
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.thelovemagazine.co.uk/article/its-time-to-open-your-eyes-11-essential-films-on-anti-racism">
                        IT'S TIME TO OPEN YOUR EYES: 11 ESSENTIAL FILMS ON
                        ANTI-RACISM
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.digitalspy.com/tv/ustv/a32751963/best-films-documentaries-educate-racism/">
                        14 of the best films and documentaries to educate
                        yourself on racism and Black oppression
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.californiansforthearts.org/antiracism-edit/2020/6/12/the-anti-racist-starter-pack-40-tv-series-documentaries-movies-ted-talks-and-books-to-add-to-your-list">
                        The Anti-Racist Starter Pack: 40 TV Series,
                        Documentaries, Movies, TED Talks, and Books to Add to
                        Your List
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.greenentrepreneur.com/article/351579">
                        21 Black Documentaries, Podcasts, And Books To Expand
                        Anti-Racist Education
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.nfb.ca/playlist/anti-racism-films/">
                        NFB ANTI-RACISM FILM LIST
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.gaytimes.co.uk/life/9-documentaries-about-racism-and-black-lives-white-people-should-be-watching-right-now/">
                        9 documentaries about racism and Black lives white
                        people should be watching right now
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://libguides.sdsu.edu/c.php?g=529838&p=7631646">
                        SDSU Anti-Racism Film List
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.voxmagazine.com/arts/anti-racism-films/article_5e38cb84-b22f-11ea-8fc0-a38ebcf61504.html">
                        Anti-racism films: What to watch and what to skip
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.harpersbazaar.com/culture/film-tv/g32961462/black-history-movies-anti-racism/">
                        10 Black History Movies and Docuseries to Educate
                        Yourself on Anti-Racism
                      </ResourceLink>
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>

                <UncontrolledCollapse toggler="#various" isOpen={toggleStatus['various']}>
                  <LinkCard>
                    <CategoryTitle>Other Sources &amp; Links</CategoryTitle>

                    <CardBody>
                      <ResourceLink href="https://www.continuetoserve.vet/post/from-veteran-to-traitor">
                        Continue To Serve
                      </ResourceLink>
                      <br />
                      <br />
                      A nonprofit started by vets who were upset by the
                      treatment of peaceful BLM protesters.
                      <hr />
                      <ResourceLink href="https://www.obama.org/anguish-and-action/?fbclid=IwAR3Odn2ngNXkVuufKCQkCXDVOQ_afyx1dCSOaDfmNfqcyIwgfJxYbGDJD28">
                        Anguish and Action
                      </ResourceLink>
                      <br />
                      <br />
                      We work to help leaders change their world—and the world
                      needs changing. The killings of George Floyd, Breonna
                      Taylor, Ahmaud Arbery, and the loss of far too many Black
                      lives to list, have left our nation heartbroken and
                      outraged. Find ways you can meet anguish with action.
                      <hr />
                      <ResourceLink href="https://www.marketwatch.com/story/how-biased-is-your-news-source-you-probably-wont-agree-with-this-chart-2018-02-28">
                        How to find Unbiased News Articles
                      </ResourceLink>
                      <br />
                      <br />
                      Where does your primary news source fall on this bias
                      chart?
                      <hr />
                      <ResourceLink href="https://www.ted.com/talks/sara_sanford_how_to_design_gender_bias_out_of_your_workplace?language=en">
                        Gender Bias
                      </ResourceLink>
                      <br />
                      <br />
                      Sara Sanford example on gender bias
                    </CardBody>
                  </LinkCard>
                </UncontrolledCollapse>
              </ContentCol>
            </RowNoOutline>

            <MobileRowNoOutline>
              <MobileText>* click on categories to view list *</MobileText>
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard onClick={toggle} id="mobileeducation">
                  <MobileEducationResources />
                  <MobileIconCardTitle>
                    Educational Resources
                  </MobileIconCardTitle>
                </MobileIconCard>
                <MobileCollapse toggler="#mobileeducation">
                  <LinkCard>
                    <MobileCategoryTitle>
                      Educational Resources
                    </MobileCategoryTitle>
                    <MobileCardBody>
                      <ResourceLink href="https://www.zinnedproject.org/about/ ">
                        The Zinn Ed Project
                      </ResourceLink>
                      <br />
                      <br />
                      Advocating for the correct history to be taught
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
              {/* Mobile Card End */}
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard id="mobilefamily">
                  <MobileFamily />
                  <MobileIconCardTitle>
                    Becoming an Anti-Racist Family
                  </MobileIconCardTitle>
                </MobileIconCard>
                <MobileCollapse toggler="#mobilefamily">
                  <LinkCard>
                    <MobileCategoryTitle>
                      Becoming an Anti-Racist Family
                    </MobileCategoryTitle>
                    <MobileCardBody>
                      <ResourceLink href="https://www.youtube.com/watch?v=OTeMtrv7p-8 ">
                        Inspiring Activism
                      </ResourceLink>
                      <br />
                      <br />
                      Interview with Jane Elliot
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
              {/* Mobile Card End */}
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard id="mobilediversity">
                  <MobileDandI />
                  <MobileIconCardTitle>
                    Inclusion &amp; Diversity
                  </MobileIconCardTitle>
                </MobileIconCard>
                <MobileCollapse toggler="#mobilediversity">
                  <LinkCard>
                    <MobileCategoryTitle>
                      Inclusion &amp; Diversity
                    </MobileCategoryTitle>
                    <MobileCardBody>
                      <ResourceLink href="https://www.tcpress.com/blog/dismantling-white-supremacy-includes-racist-tests-sat-act/">
                        Teachers College Press - Columbia University
                      </ResourceLink>
                      <br />
                      <br />
                      Dismantling White Supremacy Includes Ending Racist Tests
                      like the SAT and ACT
                      <hr />
                      <ResourceLink href="https://www.nbcnews.com/news/us-news/viral-video-forced-wealthy-texas-suburb-confront-racism-silent-majority-n1255230">
                        NBC News
                      </ResourceLink>
                      <br />
                      <br />
                      A viral video forced a wealthy Texas suburb to confront
                      racism. A 'silent majority' fought back.
                      <hr />
                      <ResourceLink href="https://www.gallup.com/workplace/247862/analytics-based-hiring-improved-bank-performance-diversity.aspx">
                        US Bank
                      </ResourceLink>
                      <br />
                      <br />
                      Improving Diversity
                      <hr />
                      <ResourceLink href="https://www.bloomberg.com/news/features/2020-02-28/the-great-tulsa-remote-worker-experiment">
                        The Great Tulsa Remote Worker Experiment
                      </ResourceLink>
                      <br />
                      <br />
                      The first class of hand-picked remote workers moved to
                      Tulsa, Oklahoma, in exchange for $10,000 and a built-in
                      community
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
              {/* Mobile Card End */}
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard id="mobilelaw">
                  <MobileLawEnforcement />
                  <MobileIconCardTitle>Law Enforcement</MobileIconCardTitle>
                </MobileIconCard>
                <MobileCollapse toggler="#mobilelaw">
                  <LinkCard>
                    <MobileCategoryTitle>Law Enforcement</MobileCategoryTitle>

                    <MobileCardBody>
                      <ResourceLink href="https://youtu.be/gzLhefJxuw4">
                        AJ+
                      </ResourceLink>
                      <br />
                      <br />
                      What Can the U.S. Learn From Europe About Policing?
                      <hr />
                      <ResourceLink href="https://youtu.be/izdfnHBMwSs">
                        AJ+
                      </ResourceLink>
                      <br />
                      <br />
                      Did These Swedish Cops School The NYPD?
                      <hr />
                      <ResourceLink href="https://sports.yahoo.com/johnny-damon-dui-arrest-video-florida-002424565.html">
                        Yahoo Sports
                      </ResourceLink>
                      <br />
                      <br />
                      Johnny Damon's arrest video shows the treatment of
                      citizens by police is very much a Black-or-white issue
                      <hr />
                      <ResourceLink href="https://youtu.be/G7qZLb3jW4I">
                        NowThis
                      </ResourceLink>
                      <br />
                      <br />
                      Syracuse Resident Challenges Mayor on City's Police Budget
                      <hr />
                      <ResourceLink href="https://level.medium.com/abolition-for-the-people-397ef29e3ca5">
                        Abolition for the People
                      </ResourceLink>
                      <br />
                      <br />
                      The Movement for a Future Without Policing & Prisons
                      <hr />
                      <ResourceLink href="https://level.medium.com/abolition-for-the-people-397ef29e3ca5">
                        Abolition for the People
                      </ResourceLink>
                      <br />
                      <br />
                      The Movement for a Future Without Policing & Prisons
                      <hr />
                      <ResourceLink href="https://mappingpoliceviolence.org/">
                        Mapping Police Violence
                      </ResourceLink>
                      <br />
                      <br />A research collaborative collecting comprehensive
                      data on police killings nationwide to quantify the impact
                      of police violence in communities.
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
              {/* Mobile Card End */}
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard id="mobileantiracist">
                  <MobileAntiRacist />
                  <MobileIconCardTitle>
                    Becoming Anti-Racist
                  </MobileIconCardTitle>
                </MobileIconCard>
                <MobileCollapse toggler="#mobileantiracist">
                  <LinkCard>
                    <MobileCategoryTitle>
                      Becoming Anti-Racist
                    </MobileCategoryTitle>

                    <MobileCardBody>
                      <ResourceLink href="https://mailchi.mp/rachelcargle/dothework-course-all-30days">
                        Anti-Racist Course
                      </ResourceLink>
                      <br />
                      <br />
                      A 30 Day course on helping you become anti-racist.
                      <hr />
                      <ResourceLink href="https://toofab.com/2020/06/04/dave-chappelle-incredible-heckler-racism-story/">
                        Dave Chapelle gets Heckled
                      </ResourceLink>
                      <br />
                      <br />
                      Dave Chapplle handles a heckler by speaking truth.
                      <hr />
                      <ResourceLink href="https://implicit.harvard.edu/implicit/takeatest.html">
                        Bias Test
                      </ResourceLink>
                      <br />
                      <br />
                      Curious about your own bias? Take a test at the following
                      link.
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
                    <MobileCategoryTitle>Books</MobileCategoryTitle>

                    <MobileCardBody>
                      <ResourceLink href="https://www.spl.org/books-and-media/books-and-ebooks/staff-picks/a-toolkit-for-anti-racism-allies">
                        A Toolkit for Anti-racism Allies
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.seattletimes.com/entertainment/books/must-read-books-to-learn-more-about-black-history-racism-and-social-justice/">
                        Check out more than 20 must-read books to learn more
                        about Black history, racism and social justice
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://seattle.bibliocommons.com/list/share/73000360/1423892517">
                        22 books on race and white privilege that will show you
                        what's really happening in America right now
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.businessinsider.com/books-white-privilege-novels-racism-antiracism-black-scholars-2020-6">
                        Ibram X. Kendi Antiracist Reading List
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.bookpeople.com/anti-racist-reading-list">
                        An Anti-Racist Reading List
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://time.com/5846732/books-to-read-about-anti-racism/">
                        Several Antiracist Books Are Selling Out. Here's What
                        Else Black Booksellers and Publishers Say You Should
                        Read
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.penguinrandomhouse.com/articles/anti-racist-books-and-resources">
                        Anti-Racist Books and Resources for Our Readers
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.thegoodtrade.com/features/books-on-race">
                        Make These 22 Books Part Of Your Anti-Racism Education
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://nymag.com/strategist/article/anti-racist-reading-list.html">
                        Anti-Racist Books Recommended by Educators and Activists
                      </ResourceLink>
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
              {/* Mobile Card End */}
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard id="mobilemovies">
                  <MobileMovies />
                  <MobileIconCardTitle>Movies</MobileIconCardTitle>
                </MobileIconCard>
                <MobileCollapse toggler="#mobilemovies">
                  <LinkCard>
                    <MobileCategoryTitle>Movies</MobileCategoryTitle>
                    <MobileCardBody>
                      <ResourceLink href="https://time.com/5847912/movies-to-watch-about-racism-protests/">
                        12 Movies to Watch to Educate Yourself About Racism and
                        Protest History, Recommended by Experts
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.oprahmag.com/entertainment/g32744961/movies-about-race-racism/">
                        18 Movies and Documentaries That Confront Race in
                        America
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.thelovemagazine.co.uk/article/its-time-to-open-your-eyes-11-essential-films-on-anti-racism">
                        IT'S TIME TO OPEN YOUR EYES: 11 ESSENTIAL FILMS ON
                        ANTI-RACISM
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.digitalspy.com/tv/ustv/a32751963/best-films-documentaries-educate-racism/">
                        14 of the best films and documentaries to educate
                        yourself on racism and Black oppression
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.californiansforthearts.org/antiracism-edit/2020/6/12/the-anti-racist-starter-pack-40-tv-series-documentaries-movies-ted-talks-and-books-to-add-to-your-list">
                        The Anti-Racist Starter Pack: 40 TV Series,
                        Documentaries, Movies, TED Talks, and Books to Add to
                        Your List
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.greenentrepreneur.com/article/351579">
                        21 Black Documentaries, Podcasts, And Books To Expand
                        Anti-Racist Education
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.nfb.ca/playlist/anti-racism-films/">
                        NFB ANTI-RACISM FILM LIST
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.gaytimes.co.uk/life/9-documentaries-about-racism-and-black-lives-white-people-should-be-watching-right-now/">
                        9 documentaries about racism and Black lives white
                        people should be watching right now
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://libguides.sdsu.edu/c.php?g=529838&p=7631646">
                        SDSU Anti-Racism Film List
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.voxmagazine.com/arts/anti-racism-films/article_5e38cb84-b22f-11ea-8fc0-a38ebcf61504.html">
                        Anti-racism films: What to watch and what to skip
                      </ResourceLink>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <ResourceLink href="https://www.harpersbazaar.com/culture/film-tv/g32961462/black-history-movies-anti-racism/">
                        10 Black History Movies and Docuseries to Educate
                        Yourself on Anti-Racism
                      </ResourceLink>
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
              {/* Mobile Card End */}
              {/* Mobile Card Start */}
              <MobileContentCol2>
                <MobileIconCard id="mobilevarious">
                  <MobileVarious />
                  <MobileIconCardTitle>More Resources</MobileIconCardTitle>
                </MobileIconCard>

                <MobileCollapse toggler="#mobilevarious">
                  <LinkCard>
                    <MobileCategoryTitle>
                      Other Sources &amp; Links
                    </MobileCategoryTitle>

                    <MobileCardBody>
                      <ResourceLink href="https://www.marketwatch.com/story/how-biased-is-your-news-source-you-probably-wont-agree-with-this-chart-2018-02-28">
                        How to find Unbiased News Articles
                      </ResourceLink>
                      <br />
                      <br />
                      Where does your primary news source fall on this bias
                      chart?
                      <hr />
                      <ResourceLink href="https://www.ted.com/talks/sara_sanford_how_to_design_gender_bias_out_of_your_workplace?language=en">
                        Gender Bias
                      </ResourceLink>
                      <br />
                      <br />
                      Sara Sanford example on gender bias
                    </MobileCardBody>
                  </LinkCard>
                </MobileCollapse>
              </MobileContentCol2>
            </MobileRowNoOutline>
            {/* Mobile Card End */}
          </RowOutline>
        </ContentContainer>
      </MainContainer>
    </Page>
  );
}

export default Resources_Research;
