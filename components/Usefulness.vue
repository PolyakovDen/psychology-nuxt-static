<template>
  <v-container fluid class="pl-5 pr-5">
    <h2 class="usefulness__title text-center">Кому будут полезны мои услуги?</h2>
    <div class="usefulness__cards">
      <div v-for="(item, index) in usefulness" :key="index" class="usefulness__card pt-6 pl-4 pr-4 pb-4">
        <div class="usefulness__card--title-wrapper">
          <h3 class="usefulness__card--title text-center">
            {{ item.title }}
          </h3>
        </div>
        <div class="divider mt-4 mb-4" />
        <p class="usefulness__card--description">
          {{ item.description }}
        </p>
        <div class="usefulness__card--circle">
          {{ item.number }}
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      usefulness: [
        {
          title: 'Мужчинам',
          description: 'переживающих тяжелый психологический период, это может быть связано с проблемами на работе, непониманием в  семейной жизни или внутренним кризисом',
          number: 1
				},
				{
          title: 'Женщинам',
          description: 'находящихся в состоянии брака, или внебрачные, при этом переживают внутренний психологический кризис, хотят разобраться в себе или своих отношениях',
          number: 2
				},
				{
          title: 'Супружеским парам',
          description: 'переживающих регулярные конфликты в быту, непонимание и дисбаланс в сексуальной жизни',
          number: 3
				},
				{
          title: 'Родителям подростков',
          description: 'которые столкнулись со сложным периодом взросления и не знают, как правильно повлиять на воспитание ребенка в этот период жизни',
          number: 4
				},
				{
          title: 'Руководителям предприятий / бизнесменам',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
          number: 5
        }
      ]
    }
  }
}
</script>

<style scoped>
	.container {
		width: 1400px !important;
	}
  .usefulness__title {
    font-size: 30px;
    color: #37432b;
    margin-top: 20px;
  }
	.usefulness__cards {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
    margin-bottom: 50px;
    margin-right: 10px;
	}
  @media screen and (max-width: 560px) {
    .usefulness__cards {
      justify-content: center !important;
    }
  }
	.usefulness__card {
    margin-top: 40px;
		width: 250px;
		display: flex;
		flex-direction: column;
		background-color: #5c7148;
		color: white;
	}
	.divider {
		border-bottom: 2px solid white;
	}
  .usefulness__card--title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  .usefulness__card--title {
    line-height: 20px;
  }
	.usefulness__card--description {
		font-size: 14px;
		width: 200px;
		text-align: center;
		margin: 0 auto;
	}
	.usefulness__card--circle {
		width: 30px;
		height: 30px;
		line-height: 30px;
		background: white;
		border-radius: 50%;
		text-align: center;
		margin: 0 auto;
		color: #3b5859;
		font-size: 15px;
		margin-top: 20px;
		font-family: 'Arial', sans-serif;
		font-weight: bold;
	}
</style>
