'use client';

import { useState } from 'react';
import { Box, Card, CardContent, Typography, Stack } from '@mui/material';
import FilterToggleButton from '../components/filter-toggle-button';

export default function FilterDemo() {
  const [areFiltersActive, setIsActive] = useState(false);
  const [hasActiveFilters, setHasActiveFilters] = useState(false);

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Filter Button Component
        </Typography>

        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Filter Button - Click to toggle active state:
            </Typography>
            <FilterToggleButton
              areFiltersActive={areFiltersActive}
              onToggleFilters={() => setIsActive(!areFiltersActive)}
              hasActiveFilters={hasActiveFilters}
            />
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Filter Button with Active Filters Indicator:
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <FilterToggleButton
                areFiltersActive={true}
                onToggleFilters={() => { }}
                hasActiveFilters={true}
              />
              <Typography variant="caption" color="text.secondary">
                (Active state with green style and orange dot)
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Multiple Filter Buttons:
            </Typography>
            <Stack direction="row" spacing={2}>
              <FilterToggleButton
                areFiltersActive={false}
                onToggleFilters={() => { }}
                hasActiveFilters={false}
              >
                Region
              </FilterToggleButton>
              <FilterToggleButton
                areFiltersActive={true}
                onToggleFilters={() => { }}
                hasActiveFilters={true}
              >
                Date Range
              </FilterToggleButton>
              <FilterToggleButton
                areFiltersActive={false}
                onToggleFilters={() => { }}
                hasActiveFilters={true}
              >
                Status
              </FilterToggleButton>
            </Stack>
          </Box>

          <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Current state: Active = {areFiltersActive ? 'true' : 'false'},
              Has filters = {hasActiveFilters ? 'true' : 'false'}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                Click the first button to toggle active state
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
