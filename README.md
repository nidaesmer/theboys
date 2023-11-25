# Axios ile Veri Çekme
Bu proje Axios kütüphanesini kullanarak bir API'den veri çekme işleminin uygulanmasıdır. The Boys adlı dizinin karakterlerini gösteren bir projedir.

## Kurulum
Projenize Axios'u eklemek için terminale yazılması gerekenler :
```
npm install axios
```
Sonrasında ise import edilmesi unutulmamalıdır. 
```
import axios from 'axios';
```

## API'den Veri Çekme
Projede kullanılan veri çekme işlemi:
```
export default function Home() {
  const [characters, setCharacters] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://www.theboysapi.com/api/character"
    );
    setCharacters(response.data.results);
    console.log(response);
  };
  ```

# Notlar
Projenizin bağlamına ve ihtiyaçlarına bağlı olarak, API URL'sini ve çekilen verinin işlenme şeklini uyarlamanız gerekebilir.

Axios'un diğer özelliklerini öğrenmek için Axios GitHub reposuna göz atabilirsiniz.

API'den veri çekerken güvenlik önlemlerini unutmayın, özellikle gerçek projelerde API anahtarları veya kimlik doğrulama gerektiren durumlar için gerekli önlemleri alın.

