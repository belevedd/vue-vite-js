import myRequest from '../request'

export function getCbcList() {
  return myRequest.post({
    url: '/cbc/list',
    data: {},
  })
}
