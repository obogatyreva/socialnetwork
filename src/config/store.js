let store = {
  _state: {
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Swansea_Wikivoyage_banner_2.jpg/1400px-Swansea_Wikivoyage_banner_2.jpg"
    },
    components: {
      profile: {
        name: "Shakira",
        birthday: "the second of February, 1977",
        city: "Columbia",
        education: "ESU 04",
        website: "http://www.shakira.com/",
        photo: "https://i.pinimg.com/236x/58/d6/cd/58d6cd60d27862bd6d78757251e34330--music-shakira-expecting-baby.jpg"
      },
      photos: [
        {
          picture: "http://danceacademyru.ru/upload/news/33/gallery/medium/2017-02-11-10-51-25_MG_4263.jpg",
        },
        {
          picture: "http://hramvluchnikah.ru/wp-content/uploads/2017/11/Foto009_tn-1-480x250.jpg",
        }
      ],
      posts: [
        {
          message: "Hello!\nHow are you\n?",
          avka: "https://igorzuevich.com/wp-content/uploads/2017/12/avatarka-v-telegram.png",
          likes: "5"
        },
        {
          message: "What are you doing?",
          avka: "https://igorzuevich.com/wp-content/uploads/2017/12/avatarka-v-telegram.png",
          likes: "10"
        }
      ],
      dialogs: [
        {
          name: "Andrew",
          text: "hello\nhow are you\n",
          avka: "http://www.avatar-mix.ru/avatars_64x64/440.jpg",
          enable: false,

        },
        {
          name: "Dmitry",
          text: "hello\nhow are you\n",
          avka: "http://www.avatar-mix.ru/avatars_64x64/440.jpg",
          enable: false,

        },
        {
          name: "Sergey",
          text: "hello\nhow are you\n",
          avka:"http://www.avatar-mix.ru/avatars_64x64/440.jpg",
          enable: false,

        },
        {
          name: "Mark",
          text: "hi\nhow are you\n",
          avka: "http://www.avatar-mix.ru/avatars_64x64/440.jpg",
          enable: true,

        },
        {
          name: "John",
          text: "hi\nhow are you\n",
          avka: "http://www.avatar-mix.ru/avatars_64x64/440.jpg",
          enable: true,

        },
        {
          name: "Anton",
          text: "hi\nhow are you\n",
          avka: "http://www.avatar-mix.ru/avatars_64x64/440.jpg",
          enable: true,

        }
      ],
    }
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    if(action.type === 'TOGGLE-MESSAGE') {
      action.message.enable = !action.message.enable;
      this.subscribe();
    } else if (action.type === 'ADD-MESSAGE') {
      if (action.post.avka === '') {
        action.post.avka = 'https://igorzuevich.com/wp-content/uploads/2017/12/avatarka-v-telegram.png';
      }
      // Add new post to existence.
      this._state.components.posts = [action.post, ...this._state.components.posts];
      this.subscribe();
    } else if (action.type === 'ADD-PHOTO') {
      this._state.components.photos.push({picture: action.url});
      console.log(this._state.components.photos);
      this.subscribe();
    }
  }
}

export default store;