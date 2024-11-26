'use client';

import { Button } from '@/components/ui/button';
import PocketBase from 'pocketbase';
import { BiWorld } from 'react-icons/bi';

export default function Home() {
	const pb = new PocketBase('https://blue-bucks-db.arinji.com/');

	return (
		<>
			<h1 className={'text-2xl flex items-center gap-x-2'}>
				<BiWorld className={'w-6 h-6'} />
				Hello World
				<Button
					onClick={async () => {
						const authData = await pb
							.collection('users')
							.authWithOAuth2({ provider: 'google' });
						console.log('auth: ', authData);
					}}>
					Google
				</Button>
			</h1>
		</>
	);
}
