import { Image, View, StyleSheet, TouchableOpacity, Text, FlatList, ScrollView } from "react-native"
import AmazonLogo from '../../assets/amazon_logo.png'
import PrimeVideoLogo from '../../assets/prime_video.png'
import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png'
import { MOVIESWATCHING } from "../../utils/moviesWatching"
import { MoviesCard } from "../../components/MovieCard"
import { MOVIESCRIME } from "../../utils/moviesCrimes"
import { MOVIESWATCH } from "../../utils/moviesWatch"

export const Home = () => {
  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Image style={styles.primeLogoImg} source={PrimeVideoLogo}/>
        <Image style={styles.AmazonLogoImg} source={AmazonLogo}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
        <View style={styles.category}>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.categoryText}>TV Shows</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.categoryText}>Movies</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.movieImageThumbnail}>
          <Image source={MovieTheWhell} style={styles.movieImage}/>
        </TouchableOpacity>

        <Text style={styles.titleList}>Continue Watching</Text>
        <FlatList
          data={MOVIESWATCHING} keyExtractor={(item) => item.id}
          renderItem={({item}) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          />

        <Text style={styles.titleList}>Crime Movies</Text>
        <FlatList
          data={MOVIESCRIME} keyExtractor={(item) => item.id}
          renderItem={({item}) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          />

        <Text style={styles.titleList}>Watch in your language</Text>
        <FlatList
          data={MOVIESWATCH} keyExtractor={(item) => item.id}
          renderItem={({item}) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={[ styles.contentList,styles.contentListLatest ]}
          showsHorizontalScrollIndicator={false}
          />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "flex-start",
  },

  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  AmazonLogoImg: {
    marginTop: -32,
    marginLeft: 30
  },

  category: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 15
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFF"
  },

  movieImageThumbnail:{
    width: "100%",
    alignItems: "center"
  },
  movieImage: {
    width: "100%"
  },

  titleList: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    padding: 15,
  },

  contentList: {
    paddingLeft: 13,
    paddingRight: 30,
  },

  contentListLatest: {
    paddingBottom: 20
  }, 
  contentMovies: {

  },


})