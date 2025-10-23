import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xgknxgixeoptrgniiwiq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhna254Z2l4ZW9wdHJnbmlpd2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MzIwOTksImV4cCI6MjA3NjMwODA5OX0.NeJ8_ezbWEpqJzYxxZ6fZtOWrOt0rbmooWosCvxmoeI'
const supabase = createClient(supabaseUrl, supabaseKey)

async function carregarImoveis() {
  const { data, error } = await supabase
    .from('imoveis')
    .select('*')

  if (error) {
    console.error('Erro ao carregar imóveis:', error)
    return
  }

  const lista = document.getElementById('lista-imoveis')
  lista.innerHTML = ''

  data.forEach(imovel => {
    lista.innerHTML += `
      <div class="card">
        <h3>${imovel.titulo}</h3>
        <p>${imovel.descricao}</p>
        <p><strong>Preço:</strong> R$ ${imovel.preco}</p>
        <img src="${imovel.imagem_url}" alt="${imovel.titulo}" />
      </div>
    `
  })
}

carregarImoveis()
