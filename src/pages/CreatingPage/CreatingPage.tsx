import { Button, Stack, TextField } from '@mui/material';
import { useCreatingPage } from './hooks';
import { styles } from './utils';

function CreatingPage() {
	const { formState, register, onSubmit } = useCreatingPage();

	return (
		<Stack sx={styles.wrapper} spacing={2} component="form" onSubmit={onSubmit}>
			<TextField
				error={!!formState.errors.name}
				label="Tên trận đấu"
				id="name-of-the-match"
				size="medium"
				{...register('name')}
				sx={styles.w100}
				helperText={formState.errors.name ? formState.errors.name.message : ''}
				autoFocus
			/>
			<Button variant="contained" size="large" type="submit" disabled={!formState.isDirty}>
				Chơi
			</Button>
		</Stack>
	);
}

export default CreatingPage;
