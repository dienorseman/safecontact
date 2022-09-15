import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const App = () => {
  return (
    <View style={style.main}>
      <View style={style.header}>
        <Image
          style={style.profile_picture}
          source={require('./media/profile_img.jpeg')}
        />
        <View style={style.icon_box}>
          <Image
            style={style.settings_picture}
            source={require('./media/settings.png')}
          />
        </View>
      </View>
      <Text style={style.main_text}>Bienvenido de nuevo Yayo</Text>
      <View style={style.orange_div}>
        <View style={style.agregar_contacto}><Text style={style.orange_text}>Agregar Contacto</Text></View>
        <Text style={style.orange_box_text}>Usado Recientemente</Text>
        <View style={style.contact_row}>
          <Image
            style={style.contact_picture}
            source={require('./media/contact1.jpeg')}
          />
          <Image
            style={style.contact_picture}
            source={require('./media/contact2.jpeg')}
          />
          <Image
            style={style.contact_picture}
            source={require('./media/contact3.jpeg')}
          />
          <Image
            style={style.contact_picture}
            source={require('./media/contact4.jpeg')}
          />
          <Image
            style={style.contact_picture}
            source={require('./media/contact5.jpeg')}
          />
          <Image
            style={style.contact_picture}
            source={require('./media/contact6.jpeg')}
          />
        </View>
        <View style={style.dark_div}>
          <View style={style.contact_view}>
            <Image
              style={style.contact_picture}
              source={require('./media/contact6.jpeg')}
            />
            <View style={style.contact_info}>
              <Text style={style.contact_name}>Martha</Text>
              <Text style={style.contact_number}>1234567890</Text>
            </View>
            <View style={style.contact_opts}>
              <View style={style.contact_opts_content}></View>
            </View>
          </View>
          <View style={style.contact_view}>
            <Image
              style={style.contact_picture}
              source={require('./media/contact1.jpeg')}
            />
            <View style={style.contact_info}>
              <Text style={style.contact_name}>Carlos</Text>
              <Text style={style.contact_number}>1234567890</Text>
            </View>
            <View style={style.contact_opts}>
              <View style={style.contact_opts_content}></View>
            </View>
          </View>
          <View style={style.contact_view}>
            <Image
              style={style.contact_picture}
              source={require('./media/contact2.jpeg')}
            />
            <View style={style.contact_info}>
              <Text style={style.contact_name}>Juan</Text>
              <Text style={style.contact_number}>1234567890</Text>
            </View>
            <View style={style.contact_opts}>
              <View style={style.contact_opts_content}></View>
            </View>
          </View>
          <View style={style.contact_view}>
            <Image
              style={style.contact_picture}
              source={require('./media/contact5.jpeg')}
            />
            <View style={style.contact_info}>
              <Text style={style.contact_name}>Alberto</Text>
              <Text style={style.contact_number}>1234567890</Text>
            </View>
            <View style={style.contact_opts}>
              <View style={style.contact_opts_content}></View>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: '#352740',
    paddingHorizontal: 24,
    paddingTop: 12,
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  profile_picture: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderColor: 'orange',
    borderWidth: 3,
    marginLeft: 12,
    marginBottom: 4,
  },

  icon_box: {
    backgroundColor: 'orange',
    height: 38,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },

  settings_picture: {
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
  },

  main_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 12,
  },

  orange_div: {
    backgroundColor: 'orange',
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: 12,
  },

  agregar_contacto:{
    backgroundColor: 'white',
    width: 120,
    height: 24,
    right:0,
    position: 'absolute',
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },

  orange_text: {
    color: 'orange',
    fontSize: 10,
    fontWeight: 'bold'
  },

  orange_box_text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 12
  },

  contact_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 12,
  },

  contact_picture: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  dark_div: {
    backgroundColor: '#352740',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
    marginTop: 12,
  },

  contact_view: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'orange',
    paddingTop: 24,
    paddingLeft: 12,
    paddingBottom: 24,
  },

  contact_info: {
    justifyContent: 'center',
    flex: 2,
    paddingLeft: 12,
  },

  contact_name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contact_number: {
    color: 'white',
    fontSize: 16,
  },

  contact_opts: {
    flex: 1,
    justifyContent: 'center',
  },

  contact_opts_content: {
    backgroundColor: 'orange',
    height: 30,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
  },
});

export default App;
