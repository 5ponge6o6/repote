import { DataType } from '../types/data';

let i = 0
const getId = () => i++

export const data: DataType[] = [
  {
    id: getId(),
    logo: 'https://companiesmarketcap.com/img/company-logos/256/YNDX.webp',
    subject: 'Yandex Taxi',
    about: 'Pavežėjimo paslaugos',
    connection: 'Rusų kapitalo įmonė',
    source: '',
  },
  {
    id: getId(),
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX////jHD/iADHjGD3iAC/iADTiADLiEjriDjjiAC3iCDbhACrhACj/9/jhACb//Pz+8vP83uH61Nj3wMb96uz1tLvyn6j4x8zzpK3ymKLxkZzqXW/lKkj+7/DpU2fnPFXufIn0rbXpUmbmNU/4xMrtcoH2usD95ejoR1350tbpW27vgY7ranrwipb0r7fuhZHhABwoXiXrAAAO8klEQVR4nO1daXuyOhAVJhAWxX0ruFIVrbXv//91F7WLZAGyqb1Pz7fWVjkmmX0mjcYf/vCHP/zhD0+BWXf/upp+LI/x4YL4uHl7mWz33UH70Y+mjMF4tVwnluf6thMEnoev8LzAcRFyIMmO03730U8piU5/Orcj3w0wgMUBAPYcFEbpctj9Xcs52H5kIXIwlxrJNLCb1nHSbT36weuhN50HKMA1yf2wzLfyYtmfPfrxK9Def6SuW3vt6LX0rXjYeTSLMoz/BbLsvpfSduP+o3nw0UoVCV5J+vj9aQXsMlBneCYZhPH2OaXr2NbCMIeHFqNnOZGFLzvRsE0/Abb18gwct8m/8c2PL442hjlHN3x/NMfXLIRgefOLQaSRYQ7HnT6SYy8Oc80O6a0tMhfW9eUAO1k9it9s6XiXh0CvN799DfUyzDmixZj7ECYxcb60u3e8/b0OlUgA+8f7W3PdzP9mAt7g5pUJ0s7QsgLnzlu1/eLeHjd7dPNaR6PC+AH4690dCXYXqMAC0ttXp64BhvlZ8CZ3IzhySXkZ3oqCmWViEc8S53Cf0zib+xQDnN3+haFFzJfRv4fXMcYe47OjW1+gxY9bKAKa76bt8faUXsDLt1tQGEbE6RX2fMB7Nj3oRezlAacg6YyI0ysCa2+W4jZkP3zBOG30tRs2P4DoZJbiir1NISh45Uc9njAb4btZihOf+bHB5vaPup65fWpZ/sasvBmxKaLCIk61OfssuHOzodUR85R5h8IfpZq9qCKChVmKE6a4iQo+TlezK0zAS8xqjQliUCxap40Xc0rRAMUlKaCHLoNiwcVoNNYs40cjxVQjxSXyX4lf9W2aIkDhM3fS0f2aFBNtEZw3lLtnpCXRYyRfgoLt1tiyha4+iqkmitOmdTbLSIq7hNbq4bbwJ+9mj6IVZFok6uq6EoBJirM55SWBVfxW5yZNmxxOrEH1v37JFIx7xEvtDbUNiX3aSoxqxVy4bRqq6P6kywBRCaEp5Wo0t7x/NwN/qkiwg28WAXwqbtkn5Q3hRjX2LLWiE82hGsOiTgOHVBqN7oI4jN66eDSGhqUNBOThEcIb8fjgUt9Ya0NYqTbh26zMmm8WThXiU/T3Dz4d0ltFxZ1KhotGhikGsTTBrsM4Qz7tfnbTQkoNfCJ2O+LEBXQByUqb9oIp6hnuZ3tZsMRxQihipqGuEZFk6GbJCXvac9pY6lu3up3aNyd26EMXQM5CfW3y3jBI6RTC7Hi7Fd034uWtWYqOjOLvlMTmMaa0Rk7CuVlGShHvHaPWjb+lH6gKpdEyaI7o/2ht0A+LiMyG7RYmbVTAwiqjyvPxjwyzfnyTk4rIb7UVm3SmCIO4GtVJQGfBKFtqj7yvlQKXyqK8mDyMTcGkzUd1+ghjlkU42Hzpf4aJ98rM6ugBJEKOVK1AGbADs721f+UIiKI4W5vTjK5QJDyrJ/ichFlg119cRQ5QZ/GcXTW1jOAIVPvV9gewzZCp5zdYXI4c+HQSpWtsGb369qlADSWgObOAoD1MzxyBZTJOTC0j7b7yMBLJOXgOp4BgmJ4LptCSfmUQR0bUfzHXXgLBSgPwM04dyHjuBmCz4mHjzMhW9Wv6+y+ihQaeO+JI6t4GbDdlSYDrLtYMsGoR7IgHjwBlPP9lMFpEdGAgR2uS6l9HVKty6l2mVgTbG55h2B5v/i1ZL7RWia+7kDFlfRD5uVynqRyBw/e0W6uYrau2GdIbbkQ1TqJ0uQ+gpMQ05HX9dJcJ0pgRx1ml7dZSKBQBfy4RTugM4wCJ71bMdsaqq6ZOSvl3jGKZ6OVgdfBFVhIC5B8+mHZDtWFT0yLlwnOPUs0gne3GbdpeZb0YYAdF6Xu/1WizLS+/4uP36l6qF0mtY47u6phi5Hrsfr5LJ1+QzKfjTxNiw9ynxdIlGhsdJqPXjKULs3fj0WadYh+5zk1HZuD67rkb8/V2gfpM/wBQaU5xpkl2e342VEhednbd/uTlbXOM5+ssyw6b99V4R+nbAXtLl2v9ibY6H4zSFx2VBO0cvNfWTJmBF2Xvx45yl1PhrTo49tFsGeGErbrpNOcPJKp88DzxuXLeC5OpwcIezuM6L/x/kWhackbt103i884vuCgeGqvOZrt5sODbNRL2zGXXd/rLwOdJYQ9Zx76Z3qV3tl1jc7VVTyZdG17frtU/hjyzBHKSRtp7x2zt7XCjblKddcFPEqZ/tEpIRtlIc9N9e8wWNXzzW8pig+DmHTr9Dd9VwG4zWZ52esomO71R7PD2HM9y28l5MUTJ26y/AcQ7k7nJjBabVU9N9uz20zgJXf7juuwYZ+MkVzXhUTmR1vaI+K4CeLadrN+2PZnFHIwnm8zyS9idgTkOhqRNCi5DhrT7R7fEHwIc5IZncpxu93UF0G58+lhbzsUwr3wmtm3akW0ctNndAflKcgXPlSbkzoIfOYv4Y3Tq73edTqv1Y6K1261WpzPrjreTl+U8aTZ9O6hdzkkVi17QlXWc8Jz3vc+qSH4SDVwb+U0fW+kiW88PcXw45Cb3IgEnDC9ehmilKtus4Vh51QCvpDPw7NlyBQ/5RjnwD0C+fYptfcu7hjzR9YnWNo50RpvqIGJoRE5QoA6qA1ztbQx3JUmVNOeYScZJL+9XI2xR60xqg8tIF7FjAvXANwQLGAyPQd0zqQhaSZ+Ts/LvB0ktho1zcPToSwRHxZ+IEd6PVb7cUCDy1BoebNv0dgWgDUOl9mRPrOpqNoxNn0mXEg1ttSLQUNQvys8kNnkmEVUk0VXr+qTfsAbJk8EzSVs1r2rl2PjA4lCJzmkeISPNQ7QwXan10JdabqVoDefYgODBa/KDPhQrB22FkQ6DU4x1Cx6gWjCVlIXF+s5ESTpazyRYZKBWNatmuaoT1marQ1MjSZc8NsozAtySSPNllcanadWX0DmtbVuT4AkJhdhSnkfCiTS3Ot3+5D1O/X/+e53AzOB0AC3SlUx3czJVIgiLDsts1xu+LA+p00Ru4DnOe+342m4lldgnYBNJNg0TAr5Cw4PeePIWZ0ngo6/wA46OYspksIpDW40k6ZZ31QfJAey302OWgHNetJuNBn4qkRKerbJI5UySRk1Pw9AcQMhh5OAdS3aI1Wy19qRJBoTPujfVQ4fdpUpKZrc6BHLbNSCaWsZmGIK/Vk4D7yYHJEGSrMng5KkU4TF6+WQwmKwjUZLeHRiCH+vL/g5WmS00oPgODJ1Ewmcsw25yFjxPwxBCbsGpEsm5U5OkaYaBZWqyWk4yoibisZ6AYKhXW0DzaHKs6mCyqCZJMdQ59MhjdkRpJpkF5SSDj+J/9PSN/wV0MDw07oruqHQADmnTdLW1P/IahUygzE4hy861TcsJEqURB2I4liwimZvRNJET0PGOk9T3ZVFsKoKrZdIh5vVAmUFpJSWVQdQx3zhIDQ9tLKK8GJaqGtIwhtuP7zpbfFB6sACTUQXlAm+IKoJturEsVXCQkEbjVFEhYnznazd65Vl5uhdxq2a2BazedaOoCGHThV9qjRa24VmUNE4V2UAyiJErRJUMaUi9nWlUDmNmFGPIZ0hZc4dM46NKbCA6gCmdmsHO/a/26bGmHxW+dY+WC7IJRGzd0RD9wqFKt7FmSEi25bGm8RhH9chJVjqzJ3UQnewBd6S0q41o0ju8/JtMU5ctP0hMATV6sRFLNkhYpkh9LqME6lzWE7HCDOLdFv7d1eAFNUoOCi0S3+iLWjWM2XT3QJ3KH1ZpYm7VCCZJ/bv6Eq3dfnuaLuPMqiMvyATwJ8QOovLg0Eq0W52c1mr6ccwSFDV9ZBczryVoslWY0EE0RbA9G+x623OL7HyR2M1rP7BomIw3PEIk7q2ZYGtwvlD3ZXnMaYEbftKSDqzQjsUVAtcYhdoIjl/ys5Wc71r1P2npqDRhNpQ0ysOPhgg2MhQodVawQE6k/kFdP1+jmtiZuFaIrSvO6FT5JFegD94biGNlon6gZIRLrQJFraaalhkOBOiyxB/U6blwRUcwlqFt4maosvEm7erh24FaHSmBipCgHJh+xRcqL7v19N5+It0vVwLAZcmhfYUbjDXffXIwUKrPU/dXtMvjUcSlTuowUacUlT9jaT4HbM33gXYNHMOq0YKlmdKm7uvATMzcr5wsWCJr9Hu8b/qHJwM5LZ1ClyvdHJ2K8ArlBgEaVQX1DX6w1aue9SYK9fJ5CoCrhf2effrB0h/51Vfi8o1yVfEJ9tapP9+1PhS7yRiAoM46jFmLGJpIL6k05rIR1PMKGCO0tJrb39DvWPyrZ3LR6WADUuYM3dewV87b+wbpJgIYSdK3FppFKTh1rWayUFGmBbYGygtiJFBDF36hOHPRNpSe2Gm+yFPkppLZrSdcPqVPARrmbBZQb0zyJ0Y/mgo8U/Wwmu1uwS7Wn7K/ulPAxaFZHdYZP3KD8Zez7y7N0GtwJ+ZJwhF90M+6OJyaK3aqDAqJALDog34mMQSXXgi1kwh1EPJSFXxcYqfS933Vgc4wlPAePWPj1L9OQQYVUS8hyF3a1bawco99GXQabdx0Wjl6/4xW5AnchFIF6VzR1mhngcp8+yI8k4dJAR1dWZk6sZmHoKOrTaf6soAHoaNpXst963pEIHHbCwsGwri6oGcNvZLR1o+GFoa4JKP9cOiQNOA8oAS7NjRoC2BU5D8R1DU+GAqR6YK61daUHZpyJ7RVLe/m/RtZxKDqPT09QcWgPqDnJ6gUxWDdjvl8UIhEgcwdzveH/KhGHDy1HvyGdGOux77C9vmwkszMuOsH9FpJQTKN7z+kFUkKUlcV/Aot8YWdhLbwvLuObVDETNj0BnS4d8+4EoTNNlxy1elzQjBxYWfP7O4yIWTU4Oj9eSMyPAhcWwt2+usWsCGiEAP8207gFXXHwmJfcITt06DecCrws99hZ7NQI1IDtmd8vJ1BVPZZgWvdb/qbCVQIU0Dp6FfZMDRey2xvHC5Wv5xfbntzO0ogiNb936fhabDXELAdLH+JG18FVkARu95c5ULo5wIVqsG2vR79UvXORKFp9XyF52Hyf6KXo/MpaiBnF+Hl9reEmASQYcCBbcNiuf2fLd4X3ux0vlztnzhVrYrZ7n+4Mf/whz/84X+H/wAY8Q328ht9BAAAAABJRU5ErkJggg==',
    subject: 'Viada',
    about: 'Degalinių tinklas',
    connection: 'Buvęs Lukoil palikimas',
    source: '',
  },
  {
    id: getId(),
    logo: 'data:image/png;base64,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',
    subject: 'Baltic Petroleum',
    about: 'Degalinių tinklas',
    connection: '---',
    source: '',
  },
  {
    id: getId(),
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAqI7///8ApImq2M6U1cnj9fJwxLOOzb8Ao4ei1coApowAooXq9/X8//8AqpDu+fdBt6Jmw7Ihr5d5y7zF6OKs3tXR7eik29FZwK1EuKNfvKlSuqeZ18xzxLTK6eNtxrW649yFzsCR1sp1MRN0AAAEJElEQVR4nO2ci07bQBBFwzahrvMghARIgaT0/z+y2raWUIV9Zx/J3K3u+YCIozXXM+vZnc2EEEIIIYQQQgghhBBCCCGEEEKIgT6M4v2n1aH//nWUF+8/rgrhy80or//FKk4ZzmXYBDJsHxm2jwzbR4btI8P2kWH7yLB9ZNg+MmwfGbaPDNtHhu0jw/aRYfvIsH1kaKaHXMxhmlqG4fh2O8nbvZNiJcN+O/4zfzm3bbhZIcF5d0GLKeoYhhMS/OElWMdw+YoEFxeVmKSGYTgjwZuNV5JWMey3ayT44vhmrWC4WSBBt5SJlBsuiVMmUmzYMadMpNSwu0WC651fykQKDQ0p8+xcvxcaEtcyA2WGHXnKRIoMDSnjLlhk2N0jwfXuOhZTFBgaOibPWmagZA1hyrz7P6MlhriWOTAI5hsaUobgEZ3lG+KO6c65lhnINGyglhnIXUPYMVGkTCTPsNsjwcPymhZTZBnilHlkWcE8Q0vKXNdiigzDfke9L/MvOYZ3SPCB5xnNMWwpZSLJhoaU4XjTD6QaBtgxsdQyA4mGOGXWR6KUiaSuIeyYqFImkmZoSBk2wTRDQ8qQPaKzNENDymx8LKZIMDTUMlu+JUxaQ9gxnQkFEwwDTJknupSJmA27ORIkq2UGrIbhGQmuiDqmjxgN+x0SvNlyLqHVEH/JpqtlBmyGuJbhTJmIydCQMozviT9YDHtcy/hKTGIxDN+QIWvKRKoYUtYyAzUMeVMmUsFwz7yCNQxXhB3TR8oNmVMmUmxInTKRUsNXqt3fzyg0PFHH6G8KDdm2fz+h9CldkCdphaTxH1wDlL8t3IcPARVqGpahixEqGK653/k1Km/utKnSPe2ZX/t1OuA5saJpnwZPc9/zpo3JsD8iQ+K0se0mBniqwvnYyATGHeHuCSnuWV/81u8W+NwBa21j/va0gZNQpL2w2RDPzJKmjf0LaQcnEjn3pBK+cjeaNinf8btHpMi4N5w0T4NrG8K0STLsjw2mTeLU1wNaxJWHxCSJk3s4bU5sbUbqbGJ7aZM8I9xc2iQbBthJkX2ryZhkx6ctri0xScZphOUBKZ6YntOsMzNNpU3Wuacd7qR4FLMMDWecedIm83Qe3LfhmYfOPGFpqG1Y0ib7HHAzaZN9lhvv2zxwrGK2YTO1Tf6NAwF3UhRpU3BrBE4bitn2knsxepg2DKegiu6nwbUNwfR3kWFoobYpu0UJf5PyP7deeBNWBzsp97Qpva/NkDbOW1PFd+7R1zbFhoa08b1hofxmSLxL7Js2FW73DDhtPBexyh201GlT5R5hnDbvfqtYxdDQSfmlTZ3brrt3ZOiXNpVuLMe7xG4jRWG+WoywSvnnCfuxnxl+7afbc7oZpdbvZP2cEEIIIYQQQgghhBBCCCGEEEIIIYQQQgjByC/alUDMsJL8rgAAAABJRU5ErkJggg==',
    subject: 'Kaspersky',
    about: 'Kibernetinio saugumo sprendimai',
    connection: '---',
    source: '',
  },
  {
    id: getId(),
    logo: 'https://3.bp.blogspot.com/-is_-11gNEmg/XVY0ikuCZMI/AAAAAAAGHeE/gbRZW8wf-ik76ncVN1cMvniNZILwaL99wCLcBGAs/s1600/borjomi-restyle-2019-website-01v.jpg',
    subject: 'Borjomi',
    about: 'Mineralinis vanduo',
    connection:
      'nuo 2013 m. pelnas už Borjomi vandenį keliauja rusų oligarchui Michailui Fridmanui',
    source: '',
  },
  {
    id: getId(),
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Faberlic-Logo.png',
    subject: 'Faberlic',
    about: 'Kosmetikos priemones',
    connection: 'Aleksejaus Nechaevo verslas',
    source: 'https://y.faberlic.com/en/l/about',
  },
  {
    id: getId(),
    logo: 'data:image/jpeg;base64,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',
    subject: 'Greenfield',
    about: 'Arbata',
    connection: 'Orimi Trade - rusų įmonė iš St. Peterburgo',
    source:
      'https://www.themoscowtimes.com/2014/08/13/import-ban-exposes-russias-fake-european-food-brands-a38325',
  },
  {
    id: getId(),
    logo: 'data:image/jpeg;base64,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',
    subject: 'Vičiūnai Group',
    about: 'Maisto prekės',
    connection:
      'Įmonė OOO „Vichiunai-RUS“ įkurta 2002 m. Sovetsko mieste (Rusija).',
    source:
      'http://www.viciunaigroup.eu/veiklos-kryptys/maisto-produktu-gamyba/ooo-vichiunai-rus',
  },
];