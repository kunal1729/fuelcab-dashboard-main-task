import React from "react";
import Navbar from "../../components/Navbar";
import { Link, Route, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Button from "../../components/UIElements/Button/Button";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import BlogDetail from "../Blog"; // Import the new component

const sampleBlogData = [
  {
    id: 1,
    title: "Journey of FuelCab India",
    description: `
      <h1 id='heading1x'>FuelCab India - Paving the Way for the
      Future of Energy</h1>
      <p>"Sometimes, the most extraordinary journeys begin with a
      single, daring step.”</p>
      <p>In a world where dreams drive us, one student's amazing story—from delivering
      diesel by hand to changing how India gets its energy—shows us what it means to
      never give up. Let's meet Sajid Obama, the person who made FuelCab India grow
      from a small idea to a big place with over 35 kinds of fuel.</p>
      <h6 id='heading2x'>So, what exactly is FuelCab India?</h6>
      <p>FuelCab India powers your business with eco-energy! We deliver green fuels and
      bio materials directly to your doorstep, igniting your operations with sustainable
      energy. Our user-friendly platform and flexible payment options supercharge your
      experience. Join the energy revolution with FuelCab India!</p>
      
      <h6 id='heading3x'>A Glimpse into the Future</h6>
      <p>As the world propels towards a future defined by energy efficiency, one name is
      poised to redefine the narrative. Welcome to the world of FuelCab India, where
      Energy Meets Convenience</p>
      <h6 id='heading4x'>From Zero to Hundred</h6>
      <p>It starts from a spark, that came into the mind of a young engineering student, he
      had the drive to do something new, something that was needed, transforming his
      dreams into reality step by step he built what today is known as FuelCab India, an
      energy marketplace with a valuation of 100cr.
      How did he start?</p>
      <p>"When dedication meets determination, dreams become
      accomplishments.”</p>
      <p>With a fascination for business from the very start, he embarked on the journey of
      trials and error with his first business idea. While he was still working on it, one
      fateful day, he read an article about this concept of fuel delivery, he was intrigued
      by it, he believed in its potential and was surrounded by individuals who shared
      the same enthusiasm and were willing to go to great lengths for what they
      passionately believed in . Using his valuable knowledge from the past venture, he
      set out to establish this exciting brand.</p>
      <p>So the passionate engineers poured their heart and soul into the project, planning
      every detail carefully. They worked day and night, fueled by sheer determination.
      Sajid, who was practically on a first-name basis with every potential investor by
      now, was so much fixated on this dream that he was ready to give his all,
      disguised as a salesman he went around promoting his product from town to
      town.</p>
      <p>Their dedication and boundless energy were contagious. Soon, they had potential
      customers lining up, and enough funds to launch their first tanker. The business
      had a slow start, but it was like a seed growing into a strong tree - it starts small
      and fragile, but as it receives care and time, it becomes more robust and confident
      with each passing day.</p>
      <p>As time passed, the demand for their services skyrocketed, and their office felt
      more like a bustling comedy club, with engineers cracking jokes about becoming
      "fuel-fledged" salespeople. The dream was no longer a mere vision; it had
      evolved into their vibrant new reality, proving that even in the most serious
      business, humour and humanity can light the way to success.</p>
      <p>The dream was transforming into a resounding success, or one might even say it
      ceased to be a dream; it had become their new reality.</p>
      <p>In the world of business, the dreamers are the doers. Success
      is the destination, but the journey, filled with unwavering
      determination and relentless passion, is where the magic
      happens.</p>
      <p>Achieving one milestone after another, they kept on climbing the stairs of success
      with relentless hard work and the strong yearning for learning and growth. Their
      passion worked like magic, painting a vivid picture of the future they had
      envisioned. Their hard work and vision earned them the coveted incubation
      opportunity from IIT Roorkee.</p>
      <p>FuelCab India started with the idea of supplying all types of energy to bridge the
      gap between small businesses and customers. They adapted to changing
      technology and energy sources and now offer 35 different types of fuel and
      energy solutions. FuelCab India supports a greener future by offering biofuels and
      is also planning to create electric vehicle charging stations in the future.</p> `,
    imageUrl:
      "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_fossil_fuels_explainer.png",
  },
  {
    id: 2,
    title: "Bio Fuels as a future",
    description: `
    <h1 id='heading1x'>"Biofuels: driving towards a sustainable future, one ecofriendly
    drop at a time.”</h1>
    <p>With the ever-emerging need for dependable, cost-effective, and environmentally
    friendly energy sources, biofuels are the need of the hour in this rapidly
    advancing world.</p>
    <p>As we race towards an uncertain future marked by escalating pollution levels,
    biofuels stand out as a crucial solution to ease the impending environmental
    challenges.</p>
    <h6 id='heading2x'>Eco-Revolution: Biofuels Unveiled</h6>
    <p>Imagine a world where instead of discarding regular waste, we can put it into a
    machine and illuminate our homes or use it to power our cars. Although this may
    seem far-fetched, with the tons of waste generated each year, we can certainly
    move closer to a greener future.</p>
    <p>Wasteful use of resources not only squanders money but also burns a hole in our
    pockets.</p>
    <p>The most commonly found biofuels are ethanol and biodiesel. When converted to
    energy, biofuels do not contribute to net greenhouse gas emissions (GHGs),
    specifically carbon dioxide. It may be true that the burning of biofuels increases
    carbon dioxide levels in the atmosphere, but it is also true that plant life cycles can
    counteract this loss by absorbing carbon dioxide from the atmosphere.</p>
    <h6 id='heading3x'>Biofuel generation</h6>
    <p>First and foremost, what is biomass?
    Biomass is basically all kinds of plant materials, from things like agricultural and
    forestry waste to stuff like garbage and even crops that are specifically grown to
    make biofuels, like bioethanol and biodiesel. The cool thing is that there are
    different ways to turn these plant materials into alternative fuels, and when we
    burn these fuels, they don't release a lot of greenhouse gases. So, by using these
    alternative fuels, we can help reduce our dependence on petroleum products.</p>
    <h6 id='heading4x'>The carbon cycle and biofuels</h6>
    <p>CO2 is just a part of this natural cycle that goes around the Earth, going through
    the air, plants, animals, oceans, soil, and rocks. It's all about maintaining this
    delicate balance between storing, releasing, and recycling carbon. Furthermore,
    when we use biofuels like bioethanol and biodiesel for our rides, we're actually
    helping to bring back that balance of CO2 in the air. It's because the stuff we use
    to make biofuels needs CO2 to grow, and they take what they need from the air.
    So, when we convert biomass into biofuels and burn them in our engines, most or
    even all of the CO2 that's released gets captured again when we grow new
    biomass for more biofuels. It's like a never-ending cycle, you know?</p>
    <h6 id='heading5x'>Impact on climate change</h6>
    <p>In the heart of India, where each of the four annual harvests yields vast amounts
    of agricultural waste, a regrettable tradition persists. The routine burning of this
    excess during harvest and plowing casts a shadow over the land, especially in
    places like New Delhi, leading to higher pollution levels.Here, biofuel emerges as a
    beacon, offering the promise of alleviating this environmental burden.</p>
    <p>Utilizing waste products as an energy source could be pivotal in combating
    climate change. Because of their compatibility with the natural carbon
    cycle,biofuels offer the most beneficial alternative for reducing greenhouse gases
    in the transportation sector.</p>
    <p>Ethanol with gasoline reduced CO2 emissions from the transportation industry by
    47.3 million metric tons in 2020. This equates to eliminating 10.1 million cars from
    the road for a year or canceling the emissions from 12 coal-fired power plants for
    a year! Biodiesel can reduce GHG emissions by 56–96%, which is the equivalent
    of growing 1.9 billion trees. When compared to petroleum diesel, it can also
    reduce global warming pollutants by 80–90%.</p>
    <p>For example, if we use ethanol made from plants (which is made from carbon that
      was in the atmosphere), we're not putting carbon into the air that has been
      trapped as oil for millions of years.</p>
    <h6 id='heading6x'>Air Quality</h6>
    <p>By blending ethanol into gasoline, tailpipe emissions of numerous pollutants such
    as CO, hydrocarbons, benzene, and particulate matter are reduced. Per net
    energy gain, biodiesel emits 1.0%, 8.3%, and 13% of agricultural nitrogen,
    phosphorus, and pesticide pollutants, respectively. These contaminants can limit
    the delivery of oxygen to bodily organs, lead to the development of toxic ozone,
    and cause cancer and reproductive and birth abnormalities.</p>
    <h2 id='heading7x'>Carbon Footprint 101: Small Steps, Big
    Impact</h2>
    <h6 id='heading8x'>“Carbon footprint: the amount of greenhouse gases,
    specifically carbon dioxide, emitted by something (such as a
    person’s activities or a product’s manufacture and transport)
    during a given period.” - Merriam Webster</h6>
    <p>While biofuels are generally considered to be more environmentally friendly than
    traditional fossil fuels, their carbon footprint can vary depending on several
    factors:</p>
    <h6 id='heading9x'>Feedstock Production:</h6>
    <p>Crop cultivation for biofuel production can increase the carbon footprint,
    particularly if large amounts of energy, fertilizers, and pesticides are used.</p>
    <h6 id='heading10x'>Processing and Conversion:</h6>
    <p>The techniques utilized to transform raw materials into biofuels have the potential
    to influence the carbon footprint, particularly</p>
    <h6 id='heading11x'>Land Use Changes:</h6>
    <p>The carbon benefits of biofuels may be countered by the release of carbon stored
    in vegetation and soil as a result of clearing land for the cultivation of biofuel
    crops.</p>
    <h6 id='heading11x'>Transportation:</h6>
    <p>The total carbon footprint of biofuels can vary depending on how far they are
    transported. Emissions may rise with long transportation distances.</p>
    <p>When compared to conventional fossil fuels, biofuels have the potential to lower
    greenhouse gas emissions overall, but their environmental advantages are
    dependent on a number of variables. Minimizing the carbon footprint of biofuels
    requires the use of sustainable practices, such as utilizing waste materials for
    biofuel production and putting in place effective production techniques. The goal
    of current research and technological developments is to improve the
    environmental performance of biofuel production while also making it more
    sustainable.</p>
    <h6 id='heading13x'>A Sustainable Tomorrow</h6>
    <p>Second-generation biofuels, often referred to as advanced biofuels, are gaining
    prominence. India, for instance, aims to reduce its reliance on diesel imports by
    embracing biofuels as part of its energy mix. The use of waste products as an
    energy source is seen as a key strategy for addressing climate change and
    avoiding the wasteful burning of resources.</p>
    <p>Despite the environmental benefits, it's noted that the main drawbacks of ethanol
    and biodiesel, common types of biofuels, include the significant land requirements
    for growing biomass materials and concerns about the sources of these materials.
    Efficiently addressing these challenges will be crucial to establishing advanced
    biofuels as a mainstream and sustainable energy solution.</p>
    <h6 id='heading14x'>FuelCab's Vision for a Sustainable Future</h6>
    <p>In order to show its commitment to environmental sustainability and ecological
    responsibility, FuelCab promotes biofuels. As a result of FuelCab's consistent
    biofuel promotion campaigns, the company is taking a proactive approach to
    educating people about alternative fuels. In order to educate people about the
    benefits of biofuels and how they can reduce carbon footprints, such campaigns
    can include educational initiatives, advertising, and community involvement.</p>
    <p>FuelCab not only decreases its own environmental impact but also sets an
    example for others in the business by using biofuels in their vehicles and
    machinery.</p>
    <p>FuelCab's emphasis on biofuels can have positive ripple effects throughout its
    supply chain. For instance, suppliers of biofuels may see increased demand,
    leading to potential growth in the biofuel industry. This, in turn, could stimulate
    innovation and investment in sustainable energy sources.</p>
    <p>By embracing biofuels, FuelCab not only aligns with environmental goals but also
    positions itself as a responsible and forward-thinking player in the industry.</p>
    <h6 id='heading15x'>“Join us on the road to a
    greener future.”</h6>
    `,
    imageUrl:
      "https://i0.wp.com/kumarmetal.com/wp-content/uploads/2022/05/biodiesels.jpg?w=1920&ssl=1",
  },
];
export function MediaCard({ blog }) {
  const extractHighlight = (description) => {
    // Remove HTML tags from the description
    const plainText = description.replace(/<[^>]+>/g, "");

    // Split the plain text into words
    const words = plainText.split(/\s+/);

    // Take the first 100 words and join them with spaces
    const first100Words = words.slice(0, 50).join(" ");

    // Add three dots at the end
    const highlight = first100Words + (words.length > 50 ? "..." : "");

    return highlight;
  };

  const UN = useNavigate();

  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        width: "30rem",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        alt={blog.title}
        image={blog.imageUrl}
        style={{ objectFit: "cover", height: "200px" }} // Set a fixed height
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "dmsans" }}
        >
          {blog.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontSize: "15px", fontWeight: "bold" }}
          sx={{ fontFamily: "dmsans" }}
        >
          {extractHighlight(blog.description)}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "flex-start",
          paddingLeft: "16px",
          paddingBottom: "16px",
        }}
      >
        <Button
          mode="text"
          style={{ color: "#1D523B" }}
          className={"custom-btn"}
          onClick={() => {
            UN(
              `/blogs/${encodeURIComponent(blog.title.replaceAll(" ", "-"))}`,
              { state: blog }
            );
          }}
          size="sm"
        >
          Read
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Blogs() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <div className="font-dmsans px-8 pt-8 text-center">
          <Typography
            variant="h2"
            component="h2"
            className="text-4xl mb-4 font-[400]"
            style={{
              color: "#1D523B",
              paddingBottom: "5px",
              fontWeight: "normal",
              marginBottom: "5px",
            }}
          >
            Blogs
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            className="text-md mb-2 font-[400]"
            style={{
              color: "grey",
              paddingBottom: "50px",
              fontWeight: "normal",
              marginBottom: "20px",
            }}
          >
            Discover insightful articles on various topics
          </Typography>

          <Grid container spacing={4}>
            {sampleBlogData.map((blog) => (
              <Grid item xs={12} sm={6} key={blog.id}>
                <MediaCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
