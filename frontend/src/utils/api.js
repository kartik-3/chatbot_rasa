import axios from "axios";
import { API_BASE_URL } from "./constants";

export async function getFaqQueryResponse(req) {
  const res = await axios.post(`${API_BASE_URL}/faq`, req);
	logQuery({
		'sender': req['sender'],
		'query': req['message'],
		'response': res['data'][0]['text'],
		'bot_type': 'faq',
	})
  return res;
}

export async function getReflectQueryResponse(req) {
  const res = await axios.post(`${API_BASE_URL}/reflect`, req);
	logQuery({
		'sender': req['sender'],
		'query': req['message'],
		'response': res['data'][0]['text'],
		'bot_type': 'reflect',
	})
  return res;	
}

export async function logQuery(req) {
  const res = await axios.post(`${API_BASE_URL}/log`, req);
  return res;	
}

