import Container from "../components/container/Container"
import Layout from "../components/layout/Layout"
import { Header } from "../modules"
import { Hero } from "../modules"
const Home = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <main style={{ backgroundColor: "#e5e7eb" }}>
          <Hero />
        </main>
      </Container>
    </Layout>
  )
}

export default Home
