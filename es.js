/**
 * ES操作
 */

const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })


// create test
const create = async function(title) {
  const result = await client.index({
    index:'myindex',
    type:'mytype',
    body:{
        title: title,
        tags:['y','z'],
        published:true,
        published_at:'2013-01-01', counter:1
   }
  });
  console.log('写入结果：', result)
}
// create()

// search test
const search = async function(title) {
  const response = await client.search({
    index: 'myindex',
    type:'mytype',
    body: {
      query: {
        match: { title: title }
      }
    }
  })
  console.log('搜索结果：', JSON.stringify(response))
}
// search()

module.exports = {
  client,
  create,
  search
}
